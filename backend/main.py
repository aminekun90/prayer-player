import argparse
import logging
import logging.handlers
from flask_app import FlaskApp

FORMAT = "%(asctime)-15s %(levelname)s:%(message)s"

logging.basicConfig(handlers=[logging.FileHandler('logs/app.log', 'w+', 'utf-8')
                              ], format=FORMAT, level=logging.INFO, datefmt='[%Y-%m-%dT%H:%M:%SZ%z')

if __name__ == '__main__':
    # parser = argparse.ArgumentParser(
    #     description="Prometheus exporter for Sonos networks")
    # parser.add_argument("--address", default="localhost:1915",
    #                     help="Network address for this server")
    # args = parser.parse_args()
    # host, port = args.address.split(":", 1)

    flask_app = FlaskApp()
    flask_app.run()
