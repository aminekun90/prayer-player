
import logging
from datetime import date, datetime, timedelta
from yaml import safe_load
import time
import requests
from sonos_device.device import SonosDevice
import os


class Api:
    instances = []

    def __init__(self, logger=None):
        self.__class__.instances.append(self)
        self.last_fetched = date.today() - timedelta(days=1)
        config_file_path = os.path.abspath('config/config.yml')
        print("App started, check log file in logs/app.log")
        with open(config_file_path, 'r') as f:
            self.config = safe_load(f)
        config = {
            'dirToServe': self.config['playlist']['dirToServe'],
            'port': self.config['playlist']['port'],
            'device': self.config['device'],
            'playlist': self.config['playlist'],
        }
        self.logger = logger or logging.getLogger()
        level = logging.DEBUG if self.config['debug'] else logging.INFO
        self.logger.setLevel(level)
        self.sonos_device = SonosDevice(config=config)
        self.logger.info(self.config)

    @classmethod
    def get_instance(cls):
        if not cls.instances:
            return None
        else:
            return cls.instances[0]

    def get_todays_timings(self, now: date):
        today_date = date.today().strftime("%d-%m-%Y")
        current_year = now.year
        current_month = now.month

        headers = {'User-Agent': 'Mozilla/5.0'}
        params = {
            'address': self.config['api']['accurateAdress'],
            'method': self.config['calculationMethods'][self.config['api']['selectedMethod']]['id']
        }

        self.fetch_timings_if_needed(
            headers, params, current_year, current_month)

        data = self.response.json()
        current_time = now.strftime("%H:%M:%S")
        timings = self.extract_timings(data, today_date)

        found_prayer = self.find_current_prayer(current_time, timings)

        return found_prayer

    def fetch_timings_if_needed(self, headers, params, current_year, current_month):
        if self.last_fetched < date.today():
            self.response = requests.get(
                f"{self.config['api']['byCalendarByAdressURL']}/{current_year}/{current_month}", headers=headers, params=params)
            logging.info(
                f'Day changed from {self.last_fetched} to {date.today()} calling api')
            self.last_fetched = date.today()

    def extract_timings(self, data, today_date):
        timings = {}
        for item in data['data']:
            gregorian_date = item['date']['gregorian']['date']
            if gregorian_date == today_date:
                timings = item['timings']
                timings = {key: value for key, value in timings.items(
                ) if key in ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']}
        return timings

    def find_current_prayer(self, current_time, timings):
        found_prayer = {}
        if len(timings) > 0:
            logging.debug(f"Today timing : {timings}")
            for key, value in timings.items():
                hours_minutes = f"{value.split(' ')[0]}:00"
                if hours_minutes == current_time:
                    found_prayer = {
                        'time': hours_minutes,
                        'prayer': key
                    }
                    break
        return found_prayer

    def call_api_and_play(self):
        logging.info("Calling API and waiting for the correct time to play...")

        while True:
            try:
                now = datetime.now()
                current_time = now.strftime("%H:%M:%S")
                found_prayer = self.get_todays_timings(now)

                if found_prayer:
                    logging.info(
                        f'Found prayer at {current_time}. Trying to play or waiting for the next time...')

                    media_url = self.config['playlist']['url']
                    if not self.sonos_device.sonos_playing(media_url):
                        self.play_media(media_url)
                    else:
                        logging.info(f"Already playing: {media_url}")

                time.sleep(2)

            except KeyboardInterrupt:
                logging.info('Stopping the fetching script...')
                self.stop_playback()
                break

            except Exception as e:
                logging.error(f'Exception occurred: {e}. Retrying...')

    def play_media(self, media_url):
        # Pass in a URI to a media file to have it streamed through the Sonos speaker
        self.sonos_device.play(media_url)

    def stop_playback(self):
        self.sonos_device.stop()
