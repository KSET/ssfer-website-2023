
FROM node:20.9-buster-slim

WORKDIR /app

COPY package.json yarn.lock ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY .eslintrc.json ./
COPY public ./public
COPY src ./src

RUN yarn
RUN yarn build
CMD ["yarn", "start"]