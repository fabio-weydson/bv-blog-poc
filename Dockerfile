#build
FROM node:12.14.1 as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# Stage
FROM nginx:1.20.0
COPY nginx/nginx.conf  /etc/nginx/conf.d/default.conf.template
COPY --from=build-step /app/dist /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
