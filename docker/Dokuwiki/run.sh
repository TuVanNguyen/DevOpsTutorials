#! /bin/bash
BASEDIR=$(dirname $0) #go to directory where script is located
cd $BASEDIR
sudo git pull
sudo chmod -R 777 ./dokuwiki
sleep 1 && xdg-open http://localhost:80 &
sudo docker-compose up --remove-orphans 
sudo docker-compose down
sudo git add .
sudo git commit -m "updating dokuwiki"
sudo git push