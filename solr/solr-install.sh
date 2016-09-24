sudo yum -y update
sudo yum install wget -y
sudo yum install java-1.8.0-openjdk.x86_64 -y
sudo yum install lsof -y

wget http://apache.mirrors.lucidnetworks.net/lucene/solr/6.2.0/solr-6.2.0.tgz

tar xzf solr-6.2.0.tgz

sudo mv solr-6.2.0 /opt/solr
sudo mv /opt/solr/example /opt/solr/core
sudo cp /vagrant/solr /etc/init.d/solr
sudo cp /vagrant/core.properties /opt/solr/core/core.properties

sudo chmod +x /etc/init.d/solr
sudo chkconfig --add solr

sudo cd /opt/solr
sudo bin/solr create -c default_core

sudo cp /vagrant/solrconfig.xml /opt/solr/server/solr/default_core/conf/solrconfig.xml

sudo bin/solr start
#sudo apt-get install software-properties-common python-software-properties -y
#sudo add-apt-repository ppa:webupd8team/java -y
#sudo apt-get update
#echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
#echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
#sudo apt-get install oracle-java8-installer -y
#sudo mkdir /var/solr/logs
#cd ~


#wget http://apache.mirrors.lucidnetworks.net/lucene/solr/6.2.0/solr-6.2.0.tgz


#tar xzf solr-6.2.0.tgz solr-6.2.0/bin/install_solr_service.sh --strip-components=2
#sudo bash ./install_solr_service.sh solr-6.2.0.tgz