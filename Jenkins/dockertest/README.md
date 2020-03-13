# Using Jenkins to Run a Docker Container
## Level: noob

## Steps
  1. Give Jenkins Permission to run docker
  1. Make sure Jenkins has Docker Pipeline Plugin Installed
  1. Write [Jenkinsfile](/Jenkins/dockertest/Jenkinsfile)
  1. Create Pipeline
  
## Give Jenkins Permission to run docker
```
sudo usermod -aG docker jenkins
sudo service jenkins restart
```

## Create Pipeline
