import http.server
import socketserver
import threading
import logging
import os
import socket
class DirectoryServer:
    def __init__(self, port, directory):
        web_dir = os.path.abspath(directory)
        os.chdir(web_dir)
        self.port = port
        self.directory = directory
        self.handler = http.server.SimpleHTTPRequestHandler
        if os.name == 'nt':  # for windows
            logging.info('Windows detected !')
            # using socket to test in windows
            self.ips = socket.gethostbyname_ex(socket.gethostname())[2]
        elif os.name == 'posix':  # For mac os
            host_name = socket.gethostname()
            host_ip = socket.gethostbyname(host_name)
            self.ips = [host_ip]
        else:  # for linux
            process = Popen(['hostname', '-I'], stdout=PIPE)
            out, err = process.communicate()
            self.ips = out.decode('utf-8').split()
        logging.info(f"From localNetwork{self.ips}")
    def start(self):
        self.httpd = socketserver.TCPServer(("", self.port), self.handler)
        self.thread = threading.Thread(target=self.httpd.serve_forever)
        self.thread.daemon = True
        logging.info("Serving directory '{}' at http://localhost:{}/".format(self.directory, self.port))
        self.thread.start()


    def stop(self):
        self.httpd.shutdown()