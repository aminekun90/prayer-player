import os
import base64
from .request_handler import RequestHandler

class AudioFileHandler(RequestHandler):
    def __init__(self):
        super().__init__()
        self.content_type = 'audio/mpeg'

    def find(self, file_name):
        try:
            template_file_path = os.path.abspath('server/audio{}'.format(file_name))
            audio_file = open(template_file_path,'rb')
            self.contents = audio_file

            self.set_status(200)
            return True
        except Exception as e:
            self.set_status(404)
            return False