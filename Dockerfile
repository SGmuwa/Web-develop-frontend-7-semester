FROM alpine as builder
RUN apk add npm
COPY . .
RUN npm install
RUN npm run-script build
RUN npm test -- --watchAll=false --testMatch=\"**/*.test.js\"
FROM nginx
COPY --from=builder /build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf.template
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
