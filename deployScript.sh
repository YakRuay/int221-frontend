#!/bin/bash

docker pull ghcr.io/yakruay/int221-frontend:dev
docker-compose down
docker-compose up -d
