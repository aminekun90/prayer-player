#!/bin/bash

# Check if /etc/docker/daemon.json exists
if [ -f /etc/docker/daemon.json ]; then
    # Check if "dns" settings exist in daemon.json
    if grep -q '"dns": \[' /etc/docker/daemon.json; then
        sudo jq 'del(.dns)' /etc/docker/daemon.json | sudo tee /etc/docker/daemon.json.tmp > /dev/null
        sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
        echo 'DNS settings have been removed from /etc/docker/daemon.json'
    else
        echo 'No DNS settings found in /etc/docker/daemon.json'
    fi
else
    echo '/etc/docker/daemon.json does not exist'
fi
