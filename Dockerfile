FROM node:24-alpine
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --omit=dev

COPY build ./

EXPOSE 3000

CMD ["node", "index.js"]