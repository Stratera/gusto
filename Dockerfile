FROM    centos:centos6

RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN     yum install -y npm
RUN     sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080

# Register gusto source
COPY . /src
COPY . package.json
COPY . gusto.js

EXPOSE  8999

CMD ["node", "/gusto.js"]