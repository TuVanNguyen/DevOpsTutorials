# My Dockerfile Tutorial for Jenkins
We will be creating a very basic nginx web app that will run in a docker container. Using Jenkins, we will build and test our custom docker image.

### Covers
  * writing a scripted pipeline
  * cloning a git repository in a pipeline
  * building a Docker image and running a Docker Container in a pipeline
  
## Steps
  1. Write the [Dockerfile](/Jenkins/myDockerfile/Dockerfile)
  1. Write [index.html](/Jenkins/myDockerfile/index.html)
  1. Write [Jenkinsfile](/Jenkins/myDockerfile/Jenkinsfile)
  1. Create the pipeline in Jenkins
  1. Build pipeline and checkout console output
  
## References
[Pipeline Examples](https://jenkins.io/doc/pipeline/examples/)

[Using Docker with Pipeline](https://jenkins.io/doc/book/pipeline/docker/)

