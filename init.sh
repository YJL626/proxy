#!/bin/bash
pm2 start ./app.js --name proxy-serve -i 0
while true; do
  sleep infinite
done
