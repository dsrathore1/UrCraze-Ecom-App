FROM node:lts-alpine3.18

WORKDIR /app/ur-craze

COPY ./package.json .

RUN npm install

RUN npm run build

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]