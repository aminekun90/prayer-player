import http.server
import socketserver
import threading
import logging
import os
import socket
import subprocess
class DirectoryServer:
    def __init__(self, port, directory):
        web_dir = os.path.abspath(directory)
        os.chdir(web_dir)
        self.port = port
        self.directory = directory
        self.handler = http.server.SimpleHTTPRequestHandler
        self.ips = self.get_ip_address()
        logging.info(f"From localNetwork{self.ips}")
    def start(self):
        self.httpd = socketserver.TCPServer(("", self.port), self.handler)
        self.thread = threading.Thread(target=self.httpd.serve_forever)
        self.thread.daemon = True
        logging.info("Serving directory '{}' at http://localhost:{}/".format(self.directory, self.port))
        self.thread.start()

    def get_ip_address(self):
        if os.name == "nt":
            hostname = socket.gethostname()
            ip_address = socket.gethostbyname(hostname)
        else:
            process = subprocess.Popen(["ifconfig"], stdout=subprocess.PIPE)
            output = process.communicate()[0]
            output = output.decode("utf-8")
            ip_address = ""
            for line in output.split("\n"):
                if "inet " in line and "127.0.0.1" not in line:
                    ip_address = line.split()[1]
                    break
        return ip_address
    def stop(self):
        self.httpd.shutdown()