import logging
import os
import socket
import subprocess
import netifaces
from soco import discover, SoCo
from typing import Set


class SonosDevice:
    sonos: SoCo | None
    config: dict
    sonos_devices_in_network: set[SoCo] | None

    def __init__(self, ip=None, config=None):
        if not config:
            self.config = {
                'port': 8000,
                'dirToServe': 'server/audio',
                'device': {
                    'volume': 25
                },
                'playlist': {
                    'url': 'playlist-url'
                }
            }
        else:
            self.config = config
        self.sonos = None
        self.port = self.config['port']
        self.host_ip = os.environ.get(
            'CURRENT_IP') or self.get_ip_address(with_netface=True)
        if ip:
            self.sonos = SoCo(ip)

        self.from_network = f"http://{self.host_ip}:{self.config['port']}"
        logging.info(f"From network access {self.from_network}")
        self.scan_for_sonos()

    def scan_for_sonos(self):
        if self.sonos:
            logging.info("Device already found!")
            return

        self.sonos_devices_in_network = discover()
        logging.info(self.sonos_devices_in_network)
        if self.sonos_devices_in_network:
            self.sonos = next(iter(self.sonos_devices_in_network))
            logging.info(
                f"Found SONOS {self.sonos.player_name}:{self.sonos.ip_address}")
            logging.info(f"Device Created with config {self.config}")
        else:
            logging.info("No Sonos device found!!")
            logging.info(self.host_ip)

    def get_ip_address_not_net_face(self):
        ip_address = None
        if os.name == "nt":  # For Windows
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

    def get_ip_address(self, with_netface):
        if not with_netface:
            return self.get_ip_address_not_net_face()

        interfaces = netifaces.interfaces()
        for iface in interfaces:
            ifaddresses = netifaces.ifaddresses(
                iface).get(netifaces.AF_INET, [])
            for addr in ifaddresses:
                ip_address = addr.get('addr', '')
                if ip_address and not ip_address.startswith('127.'):
                    return ip_address

        return ''

    def sonos_playing(self, uri: str):
        if not self.sonos:
            logging.warning(
                "Cannot check if Sonos is playing. Reason: Device not found.")
            return False

        current_track_info = self.sonos.get_current_track_info()
        current_uri = current_track_info.get('uri', '')

        if current_uri and current_uri.endswith(uri):
            current_transport_state = self.sonos.get_current_transport_info().get(
                'current_transport_state', '')
            return current_transport_state == 'PLAYING'

        return False

    def play(self, uri):
        if not self.sonos:
            logging.warning(
                "Cannot play on Sonos device. Reason: Device not found.")
            return

        self.sonos.play_uri(f"{self.from_network}{uri}")
        self.sonos.volume = self.config['device']['volume']
        track = self.sonos.get_current_track_info()
        logging.info(f"Current track on selected Sonos: {track['title']}")
        try:
            self.sonos.pause()
            self.sonos.seek('00:00:00')
        except Exception:
            pass

        # Play a stopped or paused track
        logging.info(
            f"Play in Sonos {self.sonos.ip_address}: {self.sonos.player_name}")
        self.sonos.play()

    def stop(self):
        if self.sonos and self.sonos_playing(self.config['playlist']['url']):
            self.sonos.stop()

        logging.info(f'Server DOWN - {self.host_ip}:{self.config["port"]}')
