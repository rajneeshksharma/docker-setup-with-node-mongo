#step1
FROM alpine 

#step2
RUN echo 'http://dl-3.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-3.alpinelinux.org/alpine/v3.6/community' >>  /etc/apk/repositories

RUN apk update 
RUN apk add mongodb

#step2.5
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

#step3
CMD [ "mongod" ]