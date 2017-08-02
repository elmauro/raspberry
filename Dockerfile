FROM resin/raspberry-pi-alpine-node
COPY package.json /src/package.json
RUN cd /src; npm install --production
COPY . /src
WORKDIR /src
EXPOSE  8080

CMD ["npm", "start"]

#FROM centos:centos6
#RUN curl -sL https://rpm.nodesource.com/setup_6.x | bash -
#RUN yum install -y nodejs npm
