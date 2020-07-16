# FROM mongoimg:latest
FROM wmsolar/solardev:mongoexps

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
 

 
