#!/bin/bash

# Ensure /etc/docker directory exists
sudo mkdir -p /etc/docker

# File to store DNS settings
JSON_FILE="/etc/docker/daemon.json"

# Check if /etc/docker/daemon.json exists and is readable
if [ ! -f "$JSON_FILE" ]; then
    echo '{"dns": ["8.8.8.8", "8.8.4.4"]}' | sudo tee "$JSON_FILE" >/dev/null
    echo 'Created new /etc/docker/daemon.json with DNS settings'
else
    # Check if "dns" settings already exist in daemon.json
    if ! grep -q '"dns": \[' "$JSON_FILE"; then
        # Append DNS settings to existing daemon.json without dns field
        sudo sed -i '' '/}$/s/$/, "dns":["8.8.8.8","8.8.4.4"]/g' "$JSON_FILE"
        echo 'Appended DNS settings to /etc/docker/daemon.json'
    else
        # Check if dns field is empty
        if grep -q '"dns": \[]' "$JSON_FILE"; then
            sudo sed -i '' 's/"dns": \[/&"8.8.8.8","8.8.4.4",/' "$JSON_FILE"
            echo 'Added DNS settings to /etc/docker/daemon.json'
        else
            echo 'DNS settings already exist in /etc/docker/daemon.json'
        fi
    fi
fi
