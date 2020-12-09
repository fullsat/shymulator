FROM alpine:latest

ENV PORT=8080

RUN apk add npm
RUN npm i -g @vue/cli

EXPOSE PORT
ENTRYPOINT npm run serve -p PORT
