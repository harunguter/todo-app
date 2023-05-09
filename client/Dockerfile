FROM node:16.17.0-alpine
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build"]