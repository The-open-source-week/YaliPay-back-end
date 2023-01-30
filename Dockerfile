FROM node:16

ENV PORT=3000

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN npm run build

RUN npm run start:prod

EXPOSE 3000

CMD [ "node", "./dist/main" ]