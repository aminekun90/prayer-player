import logging
import logging.handlers
from api import Api

FORMAT = "%(asctime)-15s %(levelname)s:%(message)s"

logging.basicConfig(handlers=[logging.FileHandler('logs/app.log', 'w+', 'utf-8')
                              ], format=FORMAT, level=logging.INFO, datefmt='[%Y-%m-%dT%H:%M:%SZ%z')
 
if __name__ == '__main__':
    logging.info("============ Start logging test==========")
    logging.error("This is an error")
    logging.warning("This is a warning")
    logging.info("============ End logging test==========")
    api_service = Api()
    api_service.call_api_and_play()
   
