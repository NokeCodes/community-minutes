from bs4 import BeautifulSoup
from elasticsearch import Elasticsearch
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTTextBox, LTTextLine
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfparser import PDFParser, PDFDocument
import datetime
import requests

def get_document_urls():
    r = requests.get('http://www.roanokeva.gov/agendacenter')
    soup = BeautifulSoup(r.text)
    docs = []
    for tag in soup.find_all('td', attrs={'class': 'minutes'}):
        anchor = tag.find('a')
        if not anchor:
            continue
        rel = anchor['href']
        if rel[0] == '/':
            rel = 'http://www.roanokeva.gov' + rel
        docs.append(rel)
    return docs

def convert_pdf_to_text(path):
    fp = open(path, 'rb')
    parser = PDFParser(fp)
    doc = PDFDocument()
    parser.set_document(doc)
    doc.set_parser(parser)
    doc.initialize('')
    rsrcmgr = PDFResourceManager()
    laparams = LAParams()
    device = PDFPageAggregator(rsrcmgr, laparams=laparams)
    interpreter = PDFPageInterpreter(rsrcmgr, device)
    pdfText = []
    # Process each page contained in the document.
    for page in doc.get_pages():
        interpreter.process_page(page)
        layout = device.get_result()
        for lt_obj in layout:
            if isinstance(lt_obj, LTTextBox) or isinstance(lt_obj, LTTextLine):
                pdfText.append(lt_obj.get_text())
    return pdfText

def handle():
    print('Beginning doc loop')
    es = Elasticsearch("192.168.1.71")
	#Replace phrase with userdata to be searched
    phrase="Test String To Be Replaced"
    lineNumCount=0
    phraseFinal=""
    lineNum=[]
    lineCounter=0
    
    #es.delete(index="meeting_minutes"])

    for document in get_document_urls():
        print('Parse document', document)
        with open('/tmp/file.pdf', 'wb') as outf:
            r = requests.get(document, stream=True)
            for chunk in r.iter_content():
                if not chunk:
                    continue
                outf.write(chunk)
        try:
            text = convert_pdf_to_text('/tmp/file.pdf')
        except:
            print('Failed to parse')
            continue
        if len(text) < 20:
            print('Not enough text blocks, probably an image based PDF')
            print('will not parse')
            continue
        full_text = ""

        previous_line = ""
        two_lines_ago = ""
        three_lines_ago = ""
        votes = []
        for line in text:
            lineCounter=lineCounter+1
            if not line.strip().isdigit():
                full_text += line.strip() + '\n'
                #testCount=testCount+1
                #print(testCount)
            if phrase in line:
                lineNum.append(lineCounter)
            if line.startswith('NAYS:'):
                ayes = previous_line.replace('A YES: Council Members ', '') \
                            .replace('AYES: Council Members ', '') \
                            .replace(' and ', ', ') \
                            .replace("\n", ' ') \
                            .split(',')
                ayes = filter(lambda x: len(x) > 2, map(lambda x: x.strip(), ayes))
                ayes = list(ayes)
                nays = line.replace(' and ', ', ') \
                            .replace("\n", ' ') \
                            .split(',')
                if len(nays) > 0 and '0' in nays[0]:
                    nays = []
                votes.append({
                    'Motion': two_lines_ago,
                    'AYES': list(ayes),
                    'NAYS': nays
                })
            three_lines_ago = two_lines_ago
            two_lines_ago = previous_line
            previous_line = line
            
        doc = {
            'organization': text[1],
            'meeting_date': text[2],
            'meeting_time': text[3],
            'paragraph': lineNum,
            'url': document,
            'separated_text': text,
            'full_text': full_text,
            'import_date': datetime.datetime.now(),
            'votes': votes
        }
        res = es.index(index="meeting_minutes", doc_type='meeting_minute', body=doc)


handle()
