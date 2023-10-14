
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN rm -rf .next node_modules
RUN yarn install --frozen-lockfile
RUN yarn build
