# EasyIT - Stack Node.JS

EasyIT Serverless **Stack Node** developed in **[Node.js][node]**.

---

## About Project
Project creation as a basis at the beginning of development.

---

## Stack Node
* Serverless, Node.JS, Typescript - core platform and dev tools
* DynamoDB - Database access
* SQS, SNS, IOT, S3
* Jest, Supertest - Test

## ❯ Prerequisites

* Serverless Framework

## ❯ Getting Started

```bash
git clone <name-repository>
cd <name-folder>
```

* Setup project
```bash
serverless offline
```

### Tests

- Run the unit tests using `npm run test:unit` (There is also a vscode task for this called `test`).
- Run the integration tests using `npm run test:integrarion`.
- Run the ci tests using `npm run test:ci`.

## ❯ DDD and Clean Architecture

The application follows the Uncle Bob [Clean Architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html) principles and project structure :

## ❯ Directory Layout

```
src                              → Código da aplicação
  └ domain
    └ contracts
    └ entities
    └ usecases
  └ infrastructure                     → Frameworks, drivers e ferramentas como banco de dados, o Web Framework, email, log, filas, etc.
    └ connections                 
    └ queue               
    └ repositories
    └ storage
    └ iot
  └ interfaces    
    └ controllers
    └ gateways
  └ main
    └ adapters
    └ config
    └ factories
      └ domain
        └ usecases
      └ infrastructure
        └ queue               
        └ repositories
        └ storage
        └ iot
      └ interfaces
        └ controllers
    └ queues
    └ routes     
node_modules (generated)         → Dependências do NPM
```

Made with ♥ by EasyIT

Example create IOT: https://github.com/garden-aid/iot-hub