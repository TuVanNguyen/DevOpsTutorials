# "My Dockerfile" Tutorial with Jenkins
We will be creating a very basic nginx web app that will run in a docker container. Using Jenkins, we will build and test our custom docker image. Then, we will push that image to our repository on Docker Hub. 

### Covers
  * writing a scripted pipeline
  * cloning a git repository in a pipeline
  * using Docker Plugin methods in our pipeline
  
### Before Starting
  * Register an account on [Docker Hub](https://https://hub.docker.com/)
  * ensure you have the Docker Pipeline plugin installed on Jenkins
  * ensure you have the Credentials plugin installed on Jenkins
  * ensure you have the Git plugin installed on Jenkins
## Steps
  1. Write the [Dockerfile](/Jenkins/myDockerfile/Dockerfile)
  1. Write [index.html](/Jenkins/myDockerfile/index.html)
  1. Write [Jenkinsfile](/Jenkins/myDockerfile/Jenkinsfile)
  1. Create the pipeline in Jenkins
  1. Add Dockerhub Credentials on Jenkins
  1. Build pipeline and checkout console output
  
## References
[Pipeline Examples](https://jenkins.io/doc/pipeline/examples/)

[Using Docker with Pipeline](https://jenkins.io/doc/book/pipeline/docker/)

[Building your first Docker image with Jenkins 2: Guide for developers](https://getintodevops.com/blog/building-your-first-docker-image-with-jenkins-2-guide-for-developers)

