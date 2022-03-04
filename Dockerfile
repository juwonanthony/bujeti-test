FROM node:17.1.0

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

RUN npm next telemetry disable
RUN npm run build


EXPOSE 3000

