from soco import discover, SoCo
from server import DirectoryServer
import logging


class SonosDevice:
    sonos: SoCo
    server: DirectoryServer

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
        self.sonos = None
        if ip:
            self.sonos = SoCo(ip)
        self.server = DirectoryServer(config['port'], config['dirToServe'])
        self.server.start()
        self.from_network = f"http://{self.server.ips[0]}:{self.config['port']}"
        logging.info(f"From network access {self.from_network}")
        self.sonos_devices_in_network = discover()
        for sonos in self.sonos_devices_in_network:
            if not self.sonos:
                self.sonos = sonos
            logging.info(
                f"Found SONOS {self.sonos.player_name}:{self.sonos.ip_address}")
            break
        logging.info(f"Device Created with config {self.config}")

    def sonos_playing(self, uri: str):
        current_uri = self.sonos.get_current_track_info()['uri']
        same_uri = f"{self.from_network}{uri}" == current_uri
        return self.sonos.get_current_transport_info()['current_transport_state'] == 'PLAYING' and same_uri

    def play(self, uri):
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
        self.sonos.stop()
