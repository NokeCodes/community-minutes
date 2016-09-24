from django.core.management.base import BaseCommand, CommandError
from wand.image import Image
from PIL import Image as PI
import pyocr
import pyocr.builders
import io
import urllib

class Document:
    @staticmethod
    def GetDocuments():
        return ["http://www.roanokeva.gov/AgendaCenter/ViewFile/Minutes/04182016-115"]

def handle():
    print('Beginning doc loop')
    
    for document in Document.GetDocuments():
        try:
            print('Loop')
            print(document)
            urllib.urlretrieve (document, "/tmp/file.pdf")
            print('File downloaded')
            tool = pyocr.get_available_tools()[0]
            lang = tool.get_available_languages()[1]
            print('Got tools and lagn')
            req_image = []
            final_text = []
            image_pdf = Image(filename='/tmp/file.pdf', resolution=300)
            image_jpeg = image_pdf.convert('jpeg')
            print('Beginning image loop')
            for img in image_jpeg.sequence:
                img_page = Image(image=img)
                req_image.append(img_page.make_blob('jpeg'))
            print('Beginning req_image loop')
            for img in req_image: 
                txt = tool.image_to_string(
                    PI.open(io.BytesIO(img)),
                    lang=lang,
                    builder=pyocr.builders.TextBuilder()
                )
                final_text.append(txt)
            print('Done')
        except:
            raise CommandError()



handle()