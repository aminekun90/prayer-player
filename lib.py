import bluetooth

# Set up the Bluetooth adapter
bt_adapter = bluetooth.BluetoothSocket(bluetooth.RFCOMM)

# Start scanning for nearby devices
bt_adapter.settimeout(5)
devices = bt_adapter.discover_devices()

# Print each device
for addr in devices:
    print(f"Found device: {addr} - {bluetooth.lookup_name(addr)}")