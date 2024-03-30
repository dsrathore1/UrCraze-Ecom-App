FROM node:20-alpine3.19

WORKDIR /app/ur-craze

COPY ./package.json .

RUN npm install

RUN npm run build

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]