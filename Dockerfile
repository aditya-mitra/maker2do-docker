FROM node:10-alpine
# I am using node alpine because the latest version of node is heavy

RUN npm install

WORKDIR /app

COPY . /app

EXPOSE 3000

CMD ["node", "index.js"]