FROM node:16-slim
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]