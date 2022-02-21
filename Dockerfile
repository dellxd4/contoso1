FROM node:16
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
CMD "server.js"
EXPOSE 8081
