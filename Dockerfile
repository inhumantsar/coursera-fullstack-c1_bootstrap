FROM node
MAINTAINER Shaun Martin <shaun@samsite.ca>

RUN apt-get update && apt-get install -y \
  vim 


CMD /bin/bash
