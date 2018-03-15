FROM node:8-alpine
ARG source
WORKDIR /app
EXPOSE 4200
COPY ${source:-.} .
 
RUN npm config set proxy "http://wwwcache.univ-lr.fr:3128"
RUN npm config set https-proxy "http://wwwcache.univ-lr.fr:3128"

RUN npm install
 
ENTRYPOINT ["npm", "start"]