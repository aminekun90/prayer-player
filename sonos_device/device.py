import logging
import logging
import os
import socket
import subprocess
import netifaces
import threading
from soco import discover, SoCo
from http.server import HTTPServer
from server.server import Server


class SonosDevice:
    sonos: SoCo

    def __init__(self, ip=None, config=None):
        self.config = config
        if not config:
            self.config = {
                'port': 8000,
                'dirToServe': 'server/audio',
                'device': {
                    'volume': 25
                }
            }
        
        self.port = self.config['port']
        self.host_ip = self.get_ip_address(with_netface=True)
        self.sonos = None
        if ip:
            self.sonos = SoCo(ip)
        
        self.from_network = f"http://{self.host_ip}:{self.config['port']}"
        logging.info(f"From network access {self.from_network}")
        self.scan_for_sonos()
        self.start_server()

    def scan_for_sonos(self):
        if self.sonos:
            logging.info("Device already found!")
            return
        self.sonos_devices_in_network = discover()
        if self.sonos_devices_in_network:
            for sonos in self.sonos_devices_in_network:
                if not self.sonos:
                    self.sonos = sonos
                logging.info(
                    f"Found SONOS {self.sonos.player_name}:{self.sonos.ip_address}")
                break
            logging.info(f"Device Created with config {self.config}")
        else:
            logging.info("No Sonos device found !!")

    def start_server(self):
        try:
            self.server = HTTPServer((self.host_ip, self.port), Server)
            logging.info(f'Server UP - http://{self.host_ip}:{self.port})')
            self.thread = threading.Thread(target=self.server.serve_forever)
            self.thread.daemon = True
            self.thread.start()
            
        except KeyboardInterrupt:
            pass

    def get_ip_address(self):
        ip_address = None
        if os.name == "nt":# For windows
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
    
    def get_ip_address(self,with_netface):
        if not with_netface:
            return self.get_ip_address()
        # Get the list of available network interfaces
        netifaces.interfaces()

        # Get the default interface (usually "en0" on macOS, or "eth0" on Linux)
        default_interface = netifaces.gateways()['default'][netifaces.AF_INET][1]

        # Get the IP address and netmask of the default interface
        addrs = netifaces.ifaddresses(default_interface)
        ip_address = addrs[netifaces.AF_INET][0]['addr']
        addrs[netifaces.AF_INET][0]['netmask']
        return ip_address   
     
    def sonos_playing(self, uri: str):
        if not self.sonos:
            logging.warning("Cannot check if sonos is playing reason: Device not found")
            return True
        current_uri = self.sonos.get_current_track_info()['uri']
        same_uri = f"{self.from_network}{uri}" == current_uri
        return self.sonos.get_current_transport_info()['current_transport_state'] == 'PLAYING' and same_uri

    def play(self, uri):
        if not self.sonos:
            logging.warning("Cannot play on Sonos device reason : device not found")
            return
        self.sonos.play_uri(f"{self.from_network}{uri}")
        self.sonos.volume = self.config['device']['volume']
        track = self.sonos.get_current_track_info()
        logging.info(f"Current track on selected sonos: {track['title']}")
        self.sonos.pause()
        self.sonos.seek('00:00:00')
        # Play a stopped or paused track
        logging.info(
            f"Play in SONOS {self.sonos.ip_address} : {self.sonos.player_name}")

        self.sonos.play()

    def stop(self):
        if self.sonos and self.sonos.sonos_playing(self.config['playlist']['url']):
            self.sonos.stop()
        
        self.server.server_close()
        logging.info( f'Server DOWN - {self.host_ip}:{self.config["port"]}')
