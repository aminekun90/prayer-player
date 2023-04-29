from .request_handler import RequestHandler

class BadRequestHandler(RequestHandler):
    def __init__(self):
        super().__init__()
        self.content_type = 'text/plain'
        self.set_status(404)