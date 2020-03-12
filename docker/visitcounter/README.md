# simpleDockerVisitCounter
### Level: beginner
A really simple proof of concept web application to show how a node.js app and redis backend can be containerized, and have data be persisted in a Docker volume.

### Covers
  * Creating a Dockerfile
  * Using Docker Compose
  * Attaching docker volumes to containers and persisting data

### Steps
  1. create node.js application
  1. create Dockerfile for node.js application
  1. create docker-compose file
  1. test
  
## Create node.js Application

In Bash
```
mkdir app
cd app
npm init
npm install redis
npm install express
```

## References
[http://progressivecoder.com/docker-compose-nodejs-application-with-redis-integration/](Tutorial from Progressive Coder)
