## Table of Contents:
* [Requirements](https://github.com/Cyfrowi-Publikanci/admin-service#requirements)
* [Local development](https://github.com/Cyfrowi-Publikanci/admin-service#local-development)
* [Build](https://github.com/Cyfrowi-Publikanci/admin-service#build)
* [Docker](https://github.com/Cyfrowi-Publikanci/admin-service#docker)
* [Test](https://github.com/Cyfrowi-Publikanci/admin-service#test)
* [Proto](https://github.com/Cyfrowi-Publikanci/admin-service#proto)
* [Access service](https://github.com/Cyfrowi-Publikanci/admin-service#access-service)

<br/>

## Requirements:
* Node version v15.11.0 or latest
* Package manager yarn
* @nestjs/cli

### Clone repository

```bash
https://github.com/Cyfrowi-Publikanci/admin-service.git
```

### Install nest cli

```bash
npm i -g @nestjs/cli
```

### Create required env files

```bash
cp .env.example .env.compose
```

```bash
cp .env.example .env
```

In .env file set SERVICE_HOSTNAME=localhost.<br/>
In file .env and .env.compose add missing values.

<br/>

## Local development:

### Instal required packages:

```bash
yarn install
```

### Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

<br/>

## Build:

### Build application:

```bash
yarn build
```

### Run built application:

```bash
node dist/src/main.js
```

<br/>

## Docker:

### Build image:

```bash
sudo docker build -t admin-service .
# or
docker build -t admin-service .
```

### Create container:

```bash
sudo docker run -d -p 3001:3001 admin-service
# or
docker run -d -p 3001:3001 admin-service
```

### Show running container:

```bash
sudo docker ps
# or
docker ps
```

### Successfully created container:

```bash
sudo docker ps
# or
docker ps
```

```bash
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                    NAMES
81c657c35412   admin-service "docker-entrypoint.s…"   8 seconds ago   Up 7 seconds   0.0.0.0:3001->3001/tcp   gifted_gates
```

<br/>

## Test:

### Run eslint:

```bash
yarn lint
```

### Run tests and generate coverage files:

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```

<br/>

## Proto:

### Generate ts types based on .proto files:

```bash
yarn proto
```

<br/>

## Access service:

If a specific method requires an rpc call to different service the error will be thrown.<br/>
To set up locally all services  refer to: https://github.com/Cyfrowi-Publikanci/pub-lab/blob/master/README.md

https://github.com/uw-labs/bloomrpc
