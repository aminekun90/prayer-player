import logging
import asyncio
from bleak import BleakScanner
from bleak.backends.scanner import AdvertisementData
from bleak.backends.device import BLEDevice

STATUS = {"0": "Disconnected", "1": "Connected",
          "2": "unknown", "3": "unknown"
          }


def peripheral_to_dict(peripheral):

    return {
        "identifier": str(peripheral.identifier()),
        "name": peripheral.name() or "unknown",
        # "mtu": str(peripheral.mtu()),
        "state": STATUS[str(peripheral.state())],
    }


class BluetoothDeviceController:
    def __init__(self, loop):
        self.loop = loop
        self.devices = []
        self.row_data = []
        self.stop_event = asyncio.Event()
        self.unique_addresses = set()
        self.result_future = asyncio.Future()  # Future for storing the result
        logging.info("Bluetooth init...")

    def callback(self, device: BLEDevice, advertising_data: AdvertisementData):
        address = device.address

        # Check if the address is not already in the set of unique addresses
        if address not in self.unique_addresses:
            logging.info(device)
            logging.info(advertising_data)
            self.row_data.append({
                "device": peripheral_to_dict(device.details[0]),
                "advertising_data": {
                    "localName": advertising_data.local_name,
                    "manufacturer_data": advertising_data.manufacturer_data
                }
            })

            self.devices.append(
                {
                    "device": {
                        "peripheral": peripheral_to_dict(device.details[0]),
                        "name": device.name,
                        "address": device.address

                    }, "advertising_data": {
                        "localName": advertising_data.local_name,
                    }
                })
            self.unique_addresses.add(address)

    async def _scan(self):
        try:
            scanner = BleakScanner(self.callback)

            await scanner.start()
            await asyncio.sleep(10)
        except Exception as e:
            logging.error(f"Error during scanning: {e}")
        finally:
            await scanner.stop()
            self.stop_scan()
            seen_ids = set()

            unique_list = [d for d in self.devices if (
                d["device"]["address"]not in seen_ids) and not seen_ids.add(d["device"]["address"])]

            self.result_future.set_result(
                unique_list)
        logging.info(self.row_data)

    async def scan(self):
        self.unique_addresses = set()
        self.result_future = asyncio.Future()
        try:
            await self._scan()
        except Exception as e:
            logging.error(f"Error running scanning process: {e}")
        return await self.result_future

    def stop_scan(self):
        self.stop_event.set()
