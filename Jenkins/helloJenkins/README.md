# Create The Most Basic Jenkins Pipeline
## Level: beginner

## Steps
  1. Write [Jenkinsfile](/Jenkins/dockertest/Jenkinsfile)
  1. Upload Jenkinsfile to a git repository
  1. Create Pipeline
  1. Click "Build Now" for Pipeline to test, then checkout console output
  
## Create Pipeline
  1. On Jenkins Dashboard, go to "New Item" >> "Pipeline"
  1. Under "General/Pipeline", configure settings like below. Change the repository URL and script path to match your Jenkinsfile, if you created your own.
  1. Hit Save, then "Build Now" to test. Check out Console Output.

![Pipeline Setup](/Jenkins/helloJenkins/jenkinspipeline.PNG )


# References
[Based on this Article from the Jenkins Documentation](https://jenkins.io/doc/pipeline/tour/running-multiple-steps/)
