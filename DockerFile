FROM node:16

WORKDIR /main
COPY package*.json ./
RUN npm i
ENV PORT=3000
COPY ./app /main/
COPY ./src /main/
EXPOSE 3000
CMD [ "node", "./app/app.json" ]



