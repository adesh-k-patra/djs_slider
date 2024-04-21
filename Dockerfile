FROM node:latest

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install vite@5.2.10

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]