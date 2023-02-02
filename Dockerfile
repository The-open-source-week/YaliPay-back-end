FROM node:16

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run dev

EXPOSE 3000

CMD [ "node", "./dist/main" ]