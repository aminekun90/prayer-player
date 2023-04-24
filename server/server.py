import http.server
import socketserver
import threading
import logging
import os
import socket
import subprocess
import netifaces
class DirectoryServer:
    def __init__(self, port, directory):
        web_dir = os.path.abspath(directory)
        
        os.chdir(web_dir)
        self.port = port
        self.directory = directory
        self.handler = http.server.SimpleHTTPRequestHandler
        self.ips = self.get_network_mask()
        logging.info(f"From localNetwork {self.ips}")
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
                    temp_ip_address = line.split()[1]
                    if temp_ip_address.startswith("192."):
                        ip_address = temp_ip_address
                        break
            return ip_address
    def get_network_mask(self):
        # Get the list of available network interfaces
        interfaces = netifaces.interfaces()

        # Get the default interface (usually "en0" on macOS, or "eth0" on Linux)
        default_interface = netifaces.gateways()['default'][netifaces.AF_INET][1]

        # Get the IP address and netmask of the default interface
        addrs = netifaces.ifaddresses(default_interface)
        ip_address = addrs[netifaces.AF_INET][0]['addr']
        netmask = addrs[netifaces.AF_INET][0]['netmask']

        return ip_address
    def stop(self):
        self.httpd.shutdown()