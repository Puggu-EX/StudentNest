#!/bin/bash

if [ -f app.pid ]; then
  PID=$(cat app.pid)
  echo "Stopping app with PID $PID"
  kill $PID
  rm app.pid
else
  echo "No process found with PID $PID"
fi