# Using Jenkins to Run a Docker Container

## Steps
  1. Give Jenkins Permission to run docker
  1. Make sure Jenkins has Docker Pipeline Plugin Installed
  1. Write [Jankinsfile](/Jenkins/dockertest/Jenkinsfile)
  1. Create Pipeline
  
## Give Jenkins Permission to run docker
```
sudo usermod -aG docker jenkins
sudo service jenkins restart
```
