FROM node:16

WORKDIR /main
COPY package*.json ./
RUN npm i
ENV PORT=3000
COPY ./app /main/app/
COPY ./src /main/src/
EXPOSE 3000

CMD [ "node", "./app/app.js" ]



