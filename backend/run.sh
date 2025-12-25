#!/bin/bash

mvn clean package -DskipTests

nohup java -jar target/student_nest-0.0.1-SNAPSHOT.jar > app.log 2>&1 &

echo $! > app.pid

echo "App started with PID $(cat app.pid)"
