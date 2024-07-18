#!/bin/bash

if [[ -n "$(docker info --format '{{.OperatingSystem}}' | grep 'Docker Desktop')" ]]; then
    echo "Docker Desktop found."
    docker compose up -d
else
    echo "WARNING! Docker Desktop not installed:"
    echo "  * Install docker desktop from <https://www.docker.com/get-started/>"
fi
