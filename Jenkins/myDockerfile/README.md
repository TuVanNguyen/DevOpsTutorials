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
  1. Add Dockerhub Credentials on Jenkins
  1. Create the pipeline in Jenkins
  1. Build pipeline and checkout console output

## Writing the Jenkinsfile
There are multiple blocks in this Jenkinsfile that make use of methods from various plugins we've installed in Jenkins
```
withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS']]) {
   app = docker.build("${USER}/test-nginx:${env.BUILD_ID}","./Jenkins/myDockerfile")
}
```
  * this block extracts username and password from the Jenkins credential we named 'dockerhub'
  * this allows us to access our username on Docker Hub without having to hardcode it here
  * we build our docker image under our username's namespace and tag it with the Jenkins build number
  
```
docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
    app.push()
}
```
  * In this block, we log into our Docker Hub registry with the credentials we stored under dockerhub
  * If you use a different URL for the Docker Hub registry, you will be able to log in but you may get the error "denied: requested access to the resource is denied"

## References
[Pipeline Examples](https://jenkins.io/doc/pipeline/examples/)

[Using Docker with Pipeline](https://jenkins.io/doc/book/pipeline/docker/)

[Building your first Docker image with Jenkins 2: Guide for developers](https://getintodevops.com/blog/building-your-first-docker-image-with-jenkins-2-guide-for-developers)

