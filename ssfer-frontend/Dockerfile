
FROM node:18.18.2-buster
WORKDIR /app
COPY . .
RUN rm -rf .next node_modules
RUN yarn install --frozen-lockfile
CMD ["yarn", "build"]
