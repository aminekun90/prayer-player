import logging
from bleak import BleakScanner


class BluetoothDeviceController:
    def __init__(self):
        logging.info("Bluetooth init...")

    async def scan(self):
        devices = await BleakScanner.discover()
        for d in devices:
            logging.info(d)
        return devices
