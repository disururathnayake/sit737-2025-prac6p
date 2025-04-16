FROM node:16


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY app.js .

EXPOSE 8080
CMD [ "node", "app.js" ]
