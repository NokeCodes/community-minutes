from django.core.management.base import BaseCommand, CommandError
from wand.image import Image
from PIL import Image as PI
import pyocr
import pyocr.builders
import io
import wget
from pdfminer.pdfparser import PDFParser, PDFDocument
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTTextBox, LTTextLine
from elasticsearch import Elasticsearch
import datetime

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
    
    #es.delete(index="meeting_minutes"])

    for document in Document.GetDocuments():
        wget.download (document, "/tmp/file.pdf")
        text = convert_pdf_to_text('/tmp/file.pdf')

        previous_line = ""
        two_lines_ago = ""
        three_lines_ago = ""
        votes = []
        for line in text:
            if line.startswith('NAYS:'):
                votes.append({
                    'Motion': two_lines_ago,
                    'AYES': previous_line.replace('A YES: Council Members ', '').replace('AYES: Council Members ', '').replace(' and ', ', ').replace("\n", ' ').split(','),
                    'NAYS': line.replace(' and ', ', ').replace("\n", ' ').split(',')
                })
            three_lines_ago = two_lines_ago
            two_lines_ago = previous_line
            previous_line = line

        doc = {
            'organization': text[1],
            'meeting_date': text[2],
            'meeting_time': text[3],
            'url': document,
            'separated_text': text,
            'full_text': ''.join(text),
            'import_date': datetime.datetime.now(),
            'votes': votes
        }
        res = es.index(index="meeting_minutes", doc_type='meeting_minute', body=doc)




handle()