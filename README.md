# NestJS Final Project

## Tech Stack

|           |             |
| :-------- | :---------- |
| Framework | NestJS      |
| Datebase  | PostgreSQL  |
| ORM       | Prisma      |
| OS        | macOS/Linux |

## Run Locally

Install dependencies

```bash
  npm ci
```

Start the server

```bash
  npm run start:postgres
```

*(If Prisma cannot connect to the DB, run the command again when the container is up, by default the command waits 5s for the container to start up)*

Go to: [Swagger](http://localhost:3000/api)

## Running Tests

To run tests, run the following command

```bash
  npm run test:e2e:postgres
```
