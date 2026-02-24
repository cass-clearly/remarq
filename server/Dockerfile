FROM node:22-alpine
WORKDIR /app
COPY server/package*.json server/
RUN cd server && npm ci --omit=dev
COPY server/*.js server/
COPY shared/ shared/
COPY serve/ serve/
EXPOSE 3333
CMD ["node", "server/index.js"]
