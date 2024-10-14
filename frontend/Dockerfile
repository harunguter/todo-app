FROM node:20-alpine

WORKDIR /app

COPY . /app

RUN  yarn

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "preview", "--host" ]