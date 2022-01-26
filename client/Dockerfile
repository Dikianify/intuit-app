FROM node:16.13.0

WORKDIR /code/src

ENV PORT 80

COPY package.json .

RUN npm install --quiet

COPY . .

CMD [ "npm", "start" ]