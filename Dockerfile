FROM node:17.1.0

WORKDIR /usr/src/app/

COPY package*.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/
RUN npx next telemetry disable
RUN npm run build
RUN npm run start


EXPOSE 3000

