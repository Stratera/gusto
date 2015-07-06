FROM    centos:centos6

RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
RUN     yum install -y npm

# Register gusto source
COPY src /src
COPY package.json .
COPY gusto.js .

EXPOSE  8999

CMD ["node", "/gusto.js"]