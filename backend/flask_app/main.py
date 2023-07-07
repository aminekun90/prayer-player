import os
from flask import Flask, render_template, send_from_directory, jsonify
from flask_socketio import SocketIO, emit
from flask_cors import CORS
from api.main import Api
from soco import SoCo
import threading
import json
from typing import cast
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<path:path>')
def serve_mp3(path):
    return send_from_directory('audio', path)


@app.route('/devices')
def get_devices():
    api_instance: Api = cast(Api, Api.get_instance())
    assert api_instance is not None
    device: SoCo | None = api_instance.sonos_device.sonos
    if device:
        return jsonify(
            {
                "name": device.player_name,
                "ip_adress": device.ip_address
            }

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
        socketio.run(app, debug=True, port=8000, host='0.0.0.0')

    @socketio.event
    def my_event(self, message):
        emit('my response', {'data': 'got it!'})
