import logging
import logging.handlers
from flask_app import FlaskApp

FORMAT = "%(asctime)-15s %(levelname)s:%(message)s"

logging.basicConfig(handlers=[logging.FileHandler('logs/app.log', 'w+', 'utf-8')
                              ], format=FORMAT, level=logging.INFO, datefmt='[%Y-%m-%dT%H:%M:%SZ%z')

if __name__ == '__main__':
    flask_app = FlaskApp()
    flask_app.run()
