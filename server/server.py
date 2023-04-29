import os
import http.server

from pathlib import Path
from .routes.main import routes
from .response.template_handler import TemplateHandler
from .response.bad_request_handler import BadRequestHandler
from .response.audio_file_handler import AudioFileHandler


class Server(http.server.BaseHTTPRequestHandler):

    def do_HEAD(self):
        return

    def do_POST(self):
        return

    def do_GET(self):
        split_path = os.path.splitext(self.path)
        request_extension = split_path[1]
        if request_extension == ".mp3":
            handler = AudioFileHandler()
            handler.find(self.path)
        elif request_extension == "" or request_extension == ".html":
            if self.path in routes:
                handler = TemplateHandler()
                handler.find(routes[self.path])
            else:
                handler = BadRequestHandler()

        else:
            handler = BadRequestHandler()

        self.respond({
            'handler': handler
        })

    def handle_http(self, handler):
        status_code = handler.get_status()

        self.send_response(status_code)

        if status_code == 200:
            content = handler.get_contents()
            self.send_header('Content-type', handler.get_content_type())
        else:
            content = "404 Not Found"

        self.end_headers()

        return content if type(content) is bytes else bytes(content, 'UTF-8')

    def respond(self, opts):
        response = self.handle_http(opts['handler'])
        self.wfile.write(response)
