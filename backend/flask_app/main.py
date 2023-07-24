import logging
from flask import Flask, render_template, send_from_directory, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from api.main import Api
from soco import SoCo
import threading
import json
from typing import cast
app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<path:path>')
def serve_mp3(path):
    try:
        return send_from_directory('audio', path)
    except Exception as e:
        try:
            return send_from_directory(app.static_folder or "static", path)
        except Exception as e:
            print(e)
            return "File not found", 404


@app.route('/timings')
def get_timings():
    api_instance: Api = cast(Api, Api.get_instance())
    assert api_instance is not None
    timings = api_instance.timings
    if timings:
        return jsonify({'status': True, 'message': 'success', 'result': {'timings': timings}})
    return {'status': False, 'message': 'failed', 'result': {'Error': "Internal error"}}


@app.route('/devices')
def get_devices():
    api_instance: Api = cast(Api, Api.get_instance())
    assert api_instance is not None
    devices: set[SoCo] | None = api_instance.sonos_device.sonos_devices_in_network
    if devices:
        logging.info(iter(devices))
        l = []
        for device in iter(devices):
            l.append({
                     "name": device.player_name,
                     "track_info": device.get_current_track_info(),
                     "current_transport_state": device.get_current_transport_info().get('current_transport_state', ''),
                     "ip_adress": device.ip_address,
                     "volume": device.volume,
                     "uid": device.uid,
                     "household_id": device.household_id,
                     "is_visible": device.is_visible,
                     "is_bridge": device.is_bridge,
                     "is_coordinator": device.is_bridge,
                     "is_soundbar": device.is_soundbar,
                     "is_satellite": device.is_satellite,
                     "has_satellites": device.has_satellites,
                     "sub_enabled": device.sub_enabled,
                     "sub_gain": device.sub_gain,
                     "is_subwoofer": device.is_subwoofer,
                     "has_subwoofer": device.has_subwoofer,
                     "channel": device.channel,
                     "bass": device.bass,
                     "treble": device.treble,
                     "loudness": device.loudness,
                     "balance": device.balance,
                     "audio_delay": device.audio_delay,
                     "night_mode": device.night_mode,
                     "dialog_mode": device.dialog_mode,
                     "surround_enabled": device.surround_enabled,
                     "surround_full_volume_enabled": device.surround_full_volume_enabled,
                     "surround_volume_tv": device.surround_volume_tv,
                     "surround_volume_music": device.surround_volume_music,
                     "supports_fixed_volume": device.supports_fixed_volume,
                     "fixed_volume": device.fixed_volume,
                     "soundbar_audio_input_format": device.soundbar_audio_input_format,
                     "soundbar_audio_input_format_code": device.soundbar_audio_input_format_code,
                     "trueplay": device.trueplay,
                     "status_light": device.status_light,
                     "buttons_enabled": device.buttons_enabled,
                     "voice_service_configured": device.voice_service_configured,
                     "mic_enabled": device.mic_enabled,
                     })
        return jsonify(
            json.dumps(l)
        ) or jsonify(None)
    return "No device Found !"


class FlaskApp():
    def __init__(self):
        api_service = Api()
        self.thr = threading.Thread(
            target=api_service.call_api_and_play, args=[])
        self.thr.daemon = True
        self.thr.start()

    def run_flask(self):
        socketio.run(app, debug=True, port=8000,
                     host='0.0.0.0')

    @socketio.event
    def my_event(self, message):
        emit('my response', {'data': 'got it!'})
