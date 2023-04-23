import time
import datetime
import requests
from soco import discover, SoCo
for zone in discover():
    print(zone.player_name)
    print(zone.get_current_track_info()['uri'])


def sonos_playing(sonos: SoCo, uri: str):
    current_uri = sonos.get_current_track_info()['uri']
    return sonos.get_current_transport_info()['current_transport_state'] == 'PLAYING' and uri == current_uri


def call_api_and_play(sonos, uri):
    while True:
        try:
            # Get current year
            now = datetime.datetime.now()
            current_year = now.year
            current_month = now.month
            today_date = datetime.date.today().strftime("%d-%m-%Y")
            headers = {'User-Agent': 'Mozilla/5.0'}
            params = {
                'latitude': '47.2184',
                'longitude': '1.5536',
                'method': '3'
            }

            # Make a GET request with headers and parameters
            response = requests.get(
                f"http://api.aladhan.com/v1/calendar/{current_year}/{current_month}", headers=headers, params=params)

            # Print the response
            data = response.json()
            current_time = now.strftime("%H:%M:%S")
            timings = {}
            for item in data['data']:
                gregorian_date = item['date']['gregorian']['date']
                if gregorian_date == today_date:
                    timings = item['timings']
                    timings = {key: value for key, value in timings.items() if key in ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']}

                    
            found_prayer = {}
            if len(timings) > 0:
                print(f"Today timing : {timings}")
                for key, value in timings.items():
                    hours_minutes = f"{value.split(' ')[0]}:00"
                    if hours_minutes == current_time:
                        found_prayer = {
                            'time': time,
                            'prayer': key
                        }
                        print(found_prayer)
                        break
            if len(found_prayer):
                print(found_prayer)
                # Pass in a URI to a media file to have it streamed through the Sonos
                # speaker
                if not sonos_playing(sonos, uri):
                    sonos.play_uri(uri)
                    sonos.volume = 7
                    track = sonos.get_current_track_info()

                    print(track['title'])
                    sonos.pause()
                    sonos.seek('00:00:00')
                    # Play a stopped or paused track
                    sonos.play()
                    print(f'Played {found_prayer} at {current_time}')

            print(f'{current_time} waiting for next time ...')
            time.sleep(1)
        except KeyboardInterrupt:
            print('Stopping the fetching script...')
            if sonos_playing(sonos, uri):
                print("Stopping current playing")
                sonos.stop()
            break
        except Exception as e:
            print(f'Exception occurred: {e}. Retrying...')
        
            


    
if __name__ == '__main__':
    sonos = SoCo('192.168.0.12')  # Pass in the IP of your Sonos speaker

    uri = 'http://88.126.184.174:14656/share/OptHmgaBchsY6Iqq/azan1.mp3'

    call_api_and_play(sonos,uri)
   
