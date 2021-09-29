FROM node:16-alpine3.14 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

FROM nginx:1.21.3

COPY --from=build-step /app/dist/ol-tile /usr/share/nginx/html

EXPOSE 4200:80