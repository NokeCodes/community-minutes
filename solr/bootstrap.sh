#!/usr/bin/env bash
sudo apt-get update
sudo apt-get upgrade
# install openjdk-7 
sudo apt-get purge openjdk*
sudo apt-get -y install openjdk-7-jdk
# install ES
wget "https://download.elastic.co/elasticsearch/release/org/elasticsearch/distribution/deb/elasticsearch/2.4.0/elasticsearch-2.4.0.deb"
sudo dpkg -i elasticsearch-2.4.0.deb
sudo update-rc.d elasticsearch defaults 95 10
sudo /etc/init.d/elasticsearch start
# either of the next two lines is needed to be able to access "localhost:9200" from the host os
sudo echo "network.bind_host: 0" >> /etc/elasticsearch/elasticsearch.yml
sudo echo "network.host: 0.0.0.0" >> /etc/elasticsearch/elasticsearch.yml
# enable dynamic scripting
sudo echo "script.inline: on" >> /etc/elasticsearch/elasticsearch.yml
sudo echo "script.indexed: on" >> /etc/elasticsearch/elasticsearch.yml
# enable cors (to be able to use Sense)
sudo echo "http.cors.enabled: true" >> /etc/elasticsearch/elasticsearch.yml
sudo echo "http.cors.allow-origin: /https?:\/\/.*/" >> /etc/elasticsearch/elasticsearch.yml
sudo /etc/init.d/elasticsearch restart



#installs .NET Core
#sudo sh -c 'echo "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ trusty main" > /etc/apt/sources.list.d/dotnetdev.list'
#sudo apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893
#sudo apt-get update
#sudo apt-get install dotnet-dev-1.0.0-preview2-003131 -y


#sudo apt-get install tesseract-ocr -y
#sudo apt-get install tesseract-ocr-eng -y
#sudo apt-get install imagemagick --fix-missing -y