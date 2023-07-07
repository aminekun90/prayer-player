import os
from .request_handler import RequestHandler

class TemplateHandler(RequestHandler):
    def __init__(self):
        super().__init__()
        self.content_type = 'text/html'

    def find(self, route_data):
        try:
            template_file_path = os.path.abspath('server/templates/{}'.format(route_data['template']))
            template_file = open(template_file_path)
            self.contents = template_file
            self.set_status(200)
            return True
        except Exception:
            self.set_status(404)
            return False