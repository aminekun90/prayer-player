class MockFile():
    def read(self):
        return False
        
class RequestHandler():
    def __init__(self):
        self.content_type = ""
        self.contents = MockFile()

    def get_contents(self):
        return self.contents.read()

    def read(self):
        return self.contents

    def set_status(self, status):
        self.status = status

    def get_status(self):
        return self.status

    def get_content_type(self):
        return self.content_type 

    def get_type(self):
        return 'static'