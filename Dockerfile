FROM    centos:centos6

RUN yum install -y nodejs npm --enablerepo=epel

# Register gusto source
COPY . /src
COPY . package.json
COPY . server.js

# Install app dependencies
RUN cd /src; npm install

EXPOSE  8999

CMD ["node", "/server.js"]