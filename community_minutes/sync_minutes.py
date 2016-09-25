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

    for document in Document.GetDocuments():
        try:
            wget.download (document, "/tmp/file.pdf")
            text = convert_pdf_to_text('/tmp/file.pdf')
            doc = {
                'author': 'kimchy',
                'url': document,
                'text': text,
                'timestamp': datetime.datetime.now(),
            }
            res = es.index(index="meething_minutes", doc_type='tweet', body=doc)

            print res
        except:
            raise CommandError()



handle()