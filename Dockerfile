FROM node:20.12.2

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run build && npm run serve