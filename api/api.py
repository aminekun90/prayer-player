import yaml
import logging
import datetime

import time
import requests
from device import SonosDevice
import os


class Api:
    def __init__(self):
        self.last_fetched = datetime.date.today() - datetime.timedelta(days = 1)
        config_file_path = os.path.abspath('config/config.yml')
        print(config_file_path)
        with open(config_file_path, 'r') as f:
            self.config = yaml.safe_load(f)
        config = {
            'dirToServe':self.config['playlist']['dirToServe'],
            'port':self.config['playlist']['port'],
            'device':self.config['device']
            }
        self.sonos_device = SonosDevice(config=config)
        logging.info(self.config)

    def get_todays_timings(self, now: datetime):
        today_date = datetime.date.today().strftime("%d-%m-%Y")
        current_year = now.year
        current_month = now.month

        headers = {'User-Agent': 'Mozilla/5.0'}
        params = {
            'address': self.config['api']['accurateAdress'],
            'method': self.config['calculationMethods'][12]['id']
        }
        # Make a GET request only when today changes using headers and parameters
        if self.last_fetched < datetime.date.today():
            
            self.response = requests.get(
                f"{self.config['api']['byCalendarByAdressURL']}/{current_year}/{current_month}", headers=headers, params=params)
            logging.info(f'Day changed from {self.last_fetched} to {datetime.date.today()} calling api')
            self.last_fetched = datetime.date.today()

        # Print the response
        data = self.response.json()
        current_time = now.strftime("%H:%M:%S")
        timings = {}
        for item in data['data']:
            gregorian_date = item['date']['gregorian']['date']
            if gregorian_date == today_date:
                timings = item['timings']
                timings = {key: value for key, value in timings.items(
                ) if key in ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']}

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
                    logging.info(found_prayer)
                    break
        return found_prayer

    def call_api_and_play(self):
        logging.info("Calling Api and waiting for correct Time to play...")
       
        while True:
            try:
                now = datetime.datetime.now()
                current_time = now.strftime("%H:%M:%S")
                found_prayer = self.get_todays_timings(now)
                if len(found_prayer):
                    logging.info(found_prayer)
                    logging.info(f'Found prayer at {current_time} trying to play or waiting for next time ...')
                    # Pass in a URI to a media file to have it streamed through the Sonos
                    # speaker
                    if not self.sonos_device.sonos_playing(self.config['playlist']['uri']):
                        self.sonos_device.play(self.config['playlist']['uri'])

                
                time.sleep(1)
            except KeyboardInterrupt:
                logging.info('Stopping the fetching script...')
                if self.sonos_device.sonos_playing(self.config['playlist']['url']):
                    logging.info("Stopping current playing")
                    self.sonos_device.stop()
                break
            except Exception as e:
                logging.error(f'Exception occurred: {e}. Retrying...')
