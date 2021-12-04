# node-project-template

A Node.js project template with [TypeScript](https://www.typescriptlang.org/), [Prettier](https://prettier.io/), [ESLint](https://eslint.org/), [Jest](https://jestjs.io/fr/) and [Pino](https://getpino.io/#/).

## Requirements

-   [Node.js](https://nodejs.org/en/) 16 LTS
-   [Docker](https://www.docker.com/)
-   [Docker-compose](https://docs.docker.com/compose/)

## Usage

| Command              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `npm start`          | Start the server                                |
| `npm run dev`        | Run with nodemon                                |
| `npm test`           | Run all tests                                   |
| `npm run t:u`        | Run unit tests (`*.utest.ts` files)             |
| `npm run t:i`        | Run integration tests (`*.itest.ts` files)      |
| `npm run lint-check` | Check linting with ESLint                       |
| `npm run lint-fix`   | Fix linting                                     |
| `npm run fmt`        | Format code with Prettier                       |
| `docker-compose up`  | Run the dev server inside Docker (with nodemon) |
