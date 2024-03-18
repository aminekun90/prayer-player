import logging
from datetime import date, datetime, timedelta
from yaml import safe_load
import time
import requests
from sonos_device.device import SonosDevice
from ble_module.device import BluetoothDeviceController
import os
import sched
import asyncio
import geocoder


class Api:
    instances = []

    def __init__(self, logger=None):
        self.logger = logger
        self.loop = asyncio.get_event_loop()
        self.bluetooth_controller = BluetoothDeviceController(self.loop)
        self.load_config()
        self.__class__.instances.append(self)

    def load_config(self):
        self.timings = None
        config_file_path = os.path.abspath('config/config.yml')
        with open(config_file_path, 'r') as f:
            self.config = safe_load(f)
        self.logger = self.logger or logging.getLogger()
        level = logging.DEBUG if self.config['debug'] else logging.INFO
        self.logger.setLevel(level)
        config = {
            'dirToServe': self.config['playlist']['dirToServe'],
            'port': self.config['playlist']['port'],
            'device': self.config['device'],
            'playlist': self.config['playlist'],
        }
        self.sonos_device = SonosDevice(config=config)
        self.last_fetched = date.today() - timedelta(days=1)
        self.enable_scheduler = self.config['enableScheduler']
        self.logger.info(self.config)
        self.scheduler = sched.scheduler(time.time, time.sleep)
        if not self.enable_scheduler:
            logging.info('Scheduler is disabled')
            if not self.timings:
                self.timings = self.get_todays_timings()
        else:
            self.get_todays_timings_and_schedule_prayers()
        self.logger.info(f'Total of scheduled: {len(self.scheduler.queue)}')
        return len(self.scheduler.queue)

    @classmethod
    def get_instance(cls):
        return cls.instances[0] if cls.instances else None

    def get_todays_timings(self):

        self.fetch_timings_if_needed()

        data = self.response.json()
        timings = self.extract_timings(data)
        return timings

    def fetch_timings_by_year_month(self,year,month):
            # headers = {'User-Agent': 'Mozilla/5.0'}
            g = geocoder.ip('me')
            # params = {
            #     'latitude': g.latlng[0],
            #     'longitude': g.latlng[1],
            #     # 'city': self.config['api']['city'],
            #     # 'country': self.config['api']['country'],
            #     'method': self.config['api']['selectedMethod']
            # }
            url = f"{self.config['api']['byCalendarYearMonth'].replace(':month',month).replace(':year',year)}?latitude={g.latlng[0]}&longitude={g.latlng[1]}&method={self.config['api']['selectedMethod']}"
            print(url)
            # url = f"https://api.aladhan.com/v1/calendar/2024/03?latitude=51.508515&longitude=-0.1254872&method=2"
            return requests.get(url)
    def fetch_timings(self):
        headers = {'User-Agent': 'Mozilla/5.0'}
        # g = geocoder.ip('me')
        params = {
            # 'latitude': g.latlng[0],
            # 'longitude': g.latlng[1],
            'city': self.config['api']['city'],
            'country': self.config['api']['country'],
            'method': self.config['api']['selectedMethod']
        }
        return requests.get(
                f"{self.config['api']['byCityByDate']}", headers=headers, params=params)
    def fetch_timings_if_needed(self):
        if self.last_fetched < date.today():
            self.response = self.fetch_timings()
            logging.info(
                f'Day changed from {self.last_fetched} to {date.today()} calling api')
            self.last_fetched = date.today()

    def extract_timings(self, data):
        raw_timings = data['data']['timings']
        valid_timings = {}
        for key, value in raw_timings.items():
            if key in ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']:
                time_str = value.split(' ')[0]
                time_obj = datetime.strptime(time_str, '%H:%M')
                # Time is in CEST
                valid_timings[key] = time_obj.strftime('%H:%M:%S')
        return valid_timings

    def schedule_prayers(self,):
        if not self.enable_scheduler:
            logging.info('Scheduler is disabled')
            if not self.timings:
                self.timings = self.get_todays_timings()
            return
        if self.timings:
            for prayer, prayer_time in self.timings.items():
                now = datetime.now()
                current_time = now.strftime("%H:%M:%S")
                time_diff = datetime.strptime(
                    prayer_time, "%H:%M:%S") - datetime.strptime(current_time, "%H:%M:%S")
                if time_diff.total_seconds() > 0:
                    self.scheduler.enter(time_diff.total_seconds(
                    ), 1, self.play_media, (self.config['playlist']['fileName'], ))
                    logging.info(f"Scheduled {prayer} at {prayer_time}")
        else:
            logging.info('No timings found!!!')

    def call_api_and_play(self):
        logging.info("Scheduling API call and prayers...")
        now = datetime.now()

        # Calculate the time until 1 am of the next day
        next_day = now + timedelta(days=1)
        next_day_1_am = datetime.combine(
            next_day, datetime.min.time()) + timedelta(hours=1)
        time_diff = next_day_1_am - now

        # If the current time is already past 1 am, schedule for the next 1 am
        if time_diff.total_seconds() <= 0:
            next_day_1_am += timedelta(days=1)
            time_diff = next_day_1_am - now

        # Schedule the API call and prayers at 1 am of the next day
        self.scheduler.enter(time_diff.total_seconds(), 1,
                             self.get_todays_timings_and_schedule_prayers)
        if not self.timings:
            self.timings = self.get_todays_timings()
        if len(self.scheduler.queue) == 1:
            self.schedule_prayers()
        while True:
            try:
                self.scheduler.run(blocking=False)
                time.sleep(2)

            except KeyboardInterrupt:
                logging.info('Stopping the fetching script...')
                self.stop_playback()
                break

            except Exception as e:
                logging.error(f'Exception occurred: {e}. Retrying...')

    def get_todays_timings_and_schedule_prayers(self):
        # Get today's timings
        self.timings = self.get_todays_timings()
        self.schedule_prayers()

        # Schedule the next API call and prayers for the next day at 1 am
        now = datetime.now()
        next_day = now + timedelta(days=1)
        next_day_1_am = datetime.combine(
            next_day, datetime.min.time()) + timedelta(hours=1)
        time_diff = next_day_1_am - now

        self.scheduler.enter(time_diff.total_seconds(), 1,
                             self.get_todays_timings_and_schedule_prayers)
        logging.info(f"Scheduled API call and prayers for {next_day_1_am}")

    def play_media(self, media_url, volume=None):
        # Pass in a URI to a media file to have it streamed through the Sonos speaker
        self.sonos_device.play(f"/{media_url}", volume)
        logging.info("Playing...")

    def stop_playback(self):
        self.sonos_device.stop()
