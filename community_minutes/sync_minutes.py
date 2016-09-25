from bs4 import BeautifulSoup
from elasticsearch import Elasticsearch
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTTextBox, LTTextLine
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfparser import PDFParser, PDFDocument
import datetime
import requests

class Document:
    @staticmethod
    def GetDocuments():
        return ["http://www.roanokeva.gov/AgendaCenter/ViewFile/Minutes/04182016-115"]

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

    for document in Document.GetDocuments():
        try:
            with open('/tmp/file.pdf', 'w') as outf:
                r = requests.get(document, stream=True)
                for chunk in r.iter_content:
                    if not chunk:
                        continue
                    outf.write(r)
            wget.download (document, "/tmp/file.pdf")
            text = convert_pdf_to_text('/tmp/file.pdf')
            doc = {
                'organization': text[1],
                'meeting_date': text[2],
                'meeting_time': text[3],
                'url': document,
                'seperated_text': text,
                'full_text': ''.join(text),
                'import_date': datetime.datetime.now(),
            }
            res = es.index(index="meething_minutes", doc_type='meeting_minute', body=doc)
        except:
            raise CommandError()



handle()
