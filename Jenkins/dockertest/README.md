# Create Jenkins Pipeline to Run a Docker Container
## Level: beginner

## Steps
  1. Give Jenkins Permission to run docker
  1. Make sure Jenkins has Docker Pipeline Plugin Installed
  1. Write [Jenkinsfile](/Jenkins/dockertest/Jenkinsfile)
  1. Create Pipeline
  1. Click "Build Now" for Pipeline to test, then checkout console output
  
## Give Jenkins Permission to run docker
```
sudo usermod -aG docker jenkins
sudo service jenkins restart
```

## Create Pipeline
  1. On Jenkins Dashboard, go to "New Item" >> "Pipeline"
  1. Under "General/Pipeline", configure settings like below. Change the repository URL and script path to match your Jenkinsfile, if you created your own.
  1. Hit Save

![Pipeline Setup](/Jenkins/dockertest/jenkinsdockerpipeline.PNG )
