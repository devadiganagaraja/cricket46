shh to EC2 instance.

sudo apt-get update


sudo apt-get install -y git



sudo apt-get install -y npm

sudo apt-get install -y nodejs

sudo npm install -g @angular/cli


//update latest Node version:-

//Linux/Mac:
//The module n makes version-management easy:
sudo npm install n -g   
//For the latest stable version:
sudo n stable   
//For the latest version:
sudo n latest


git clone https://github.com/gitAccountName/myApp.git

cd myApp
 ng build --prod

mkdir /home/ubuntu/build 
cd /home/ubuntu/build 
cp -r ../myApp/dist/myApp/* .






sudo apt install nginx

cd /etc/nginx/sites-enabled

**cd /etc/nginx/sites-enabled**



server {
	listen 80;    listen [::]:80;
	root /home/ubuntu/cricket46/dist/cricket46;
	index index.html index.htm index.nginx-debian.html;
	server_name 34.208.217.3; //instance ip
	location / {
		try_files $uri $uri/ /index.html;
	}
}

service nginx restart
