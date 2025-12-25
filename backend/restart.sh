#!/bin/bash

if [ -f app.pid ]; then
  PID=$(cat app.pid)
  echo "Stopping app with PID $PID"
  kill $PID
  rm app.pid
else
  echo "File app.pid not found"
fi

# Go to : /home/puggu/StudentNest/frontend_master/react-client
# Run   : npm run build
# Copy  : dist/*
# Paste : /home/puggu/StudentNest/backend/src/main/resources/static/

if [ -f run.sh ]; then
  exec ./run.sh
else
  echo "Could not find 'run.sh'"
fi

# After 5 seconds of sleep
# Seed database

#python3 seed_database.py