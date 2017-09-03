FROM node
MAINTAINER Shaun Martin <shaun@samsite.ca>

EXPOSE 3000
EXPOSE 3001


RUN apt-get update && apt-get install -y \
  vim 


CMD /bin/bash
