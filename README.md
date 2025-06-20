<p align="center">
  <!-- Logo alternando para modo escuro e claro no GitHub -->
  <img alt="Cypress Real World App Logo" src="./src/svgs/rwa-logo-light.svg#gh-dark-mode-only" />
  <img alt="Cypress Real World App Logo" src="./src/svgs/rwa-logo.svg#gh-light-mode-only" />
</p>

<p align="center">
  <a href="https://cypress.io">
    <img width="140" alt="Cypress Logo" src="./src/svgs/built-by-cypress.svg" />
  </a>
</p>

<p align="center">
  <a href="https://cloud.cypress.io/projects/7s5okt/runs">
    <img src="https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/7s5okt/develop&style=flat&logo=cypress" alt="Cypress Cloud Status" />
  </a>
  <a href="https://codecov.io/gh/cypress-io/cypress-realworld-app">
    <img src="https://codecov.io/gh/cypress-io/cypress-realworld-app/branch/develop/graph/badge.svg" alt="Code Coverage" />
  </a>
  <a href="https://percy.io/cypress-io/cypress-realworld-app">
    <img src="https://percy.io/static/images/percy-badge.svg" alt="Visual Testing Status" />
  </a>
  <a href="#contributors-">
    <img src="https://img.shields.io/badge/all_contributors-6-green.svg?style=flat" alt="Contributors" />
  </a>
</p>

# Cypress Real World App (RWA)

> **Aplicacao de pagamento** para demonstrar o uso **real** do Cypress em testes, padroes e fluxos de trabalho modernos.

<p align="center">
  <img style="width: 70%" alt="Cypress Real World App Screenshot" src="./public/img/rwa-readme-screenshot.png" />
</p>

---

## 🚀 Sobre

Este projeto é uma aplicação full-stack (React + Express) com banco de dados JSON local, criada para fins educacionais e de demonstração, simulando um ambiente real de testes com Cypress.
É perfeita para aprender, experimentar e desenvolver suas habilidades em testes automatizados.

> 💬 **Nota importante:**
> Esta aplicação NÃO é um sistema de produção completo, e sim uma plataforma para aprendizado e experimentação.

---

## 💡 Principais Recursos

* 🛠 Construído com [React](https://reactjs.org), [XState](https://xstate.js.org), [Express](https://expressjs.com), [lowdb](https://github.com/typicode/lowdb), [Material-UI](https://material-ui.com) e [TypeScript](https://typescriptlang.org).
* ⚡ Zero dependência de banco de dados real — usa JSON local.
* 🚀 Aplicação full-stack com backend Express e frontend React, com funcionalidades e testes reais.
* 👮‍♂️ Autenticação local integrada.
* 🔥 Seed do banco atualizado automaticamente com testes E2E.
* 💻 Integração CI/CD com [Cypress Cloud](https://cloud.cypress.io).

---

## 📦 Começando

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão exata especificada em `.node-version`)
* [Yarn Classic (v1)](https://classic.yarnpkg.com/)

> **Nota:** Este projeto não suporta Yarn Modern (v2 ou superior).

Para instalar Yarn Classic globalmente (caso não use Corepack):

```bash
npm install yarn@latest -g
```

---

### Instalação

```bash
git clone https://github.com/cypress-io/cypress-realworld-app.git
cd cypress-realworld-app
yarn
```

> **Mac M1/ M2 users:**
> Caso use Mac com chip Apple Silicon, execute para evitar baixar Chromium desnecessariamente:
>
> ```bash
> PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn install
> ```

---

### Executando a aplicação

```bash
yarn dev
```

A aplicação roda, por padrão, nas portas:

* Frontend: `3000`
* Backend API: `3001`

> Para alterar essas portas, modifique as variáveis `PORT` e `VITE_BACKEND_PORT` no arquivo `.env`.
> **Não comite** essas alterações para evitar conflitos com o CI.

---

### Executando testes com Cypress

Abra o Cypress UI:

```bash
yarn cypress:open
```

> Se alterou as portas, ajuste também `cypress.config.ts` para refletir as mudanças em:
>
> * `e2e.baseUrl`
> * `env.apiUrl`
> * `env.url`

---

## 🧪 Tipos de Testes e Localização

| Tipo de teste | Localização                                |
| ------------- | ------------------------------------------ |
| API           | [`cypress/tests/api`](./cypress/tests/api) |
| UI            | [`cypress/tests/ui`](./cypress/tests/ui)   |
| Componentes   | [`src`](./src)                             |
| Unitários     | [`src/__tests__`](./src/__tests__)         |

---

## 💄 Banco de Dados Local

* Arquivo JSON local: [`data/database.json`](./data/database.json)
* O banco é reinicializado (reseed) automaticamente a cada start (`yarn dev`) e entre testes E2E.
* Frontend atualiza o banco via backend Express e utilitários dedicados.
* Para gerar um novo seed:

```bash
yarn db:seed
```

* Seed vazio disponível para testes sem dados: [`data/empty-seed.json`](./data/empty-seed.json)
* Para rodar com seed vazio:

```bash
yarn start:empty
```

---

## ⚙️ Scripts Úteis do NPM

| Script           | Descrição                                                      |
| ---------------- | -------------------------------------------------------------- |
| `dev`            | Inicia backend (modo watch) + frontend                         |
| `dev:coverage`   | Inicia backend + frontend com cobertura de código ativada      |
| `dev:auth0`      | Inicia backend + frontend com Auth0 para autenticação          |
| `dev:okta`       | Inicia backend + frontend com Okta para autenticação           |
| `dev:cognito`    | Inicia backend + frontend com Amazon Cognito para autenticação |
| `dev:google`     | Inicia backend + frontend com Google para autenticação         |
| `start`          | Inicia backend e frontend (modo normal)                        |
| `types`          | Valida tipos TypeScript                                        |
| `db:seed`        | Gera novos seeds para o banco JSON                             |
| `start:empty`    | Inicia backend, frontend e Cypress com banco vazio             |
| `list:dev:users` | Lista usuários de exemplo no banco de desenvolvimento          |

---

## 📊 Relatório de Cobertura de Código

Utiliza [@cypress/code-coverage](https://github.com/cypress-io/code-coverage) para frontend e backend.

Passos para gerar relatório:

1. Execute `yarn dev:coverage` para iniciar com cobertura ativada.
2. Rode os testes:

```bash
yarn cypress:run --env coverage=true
```

3. Após execução, visualize o relatório em `coverage/index.html`.

---

## 🔐 Autenticação com Terceiros (3rd Party)

Suporta múltiplos provedores de autenticação para fins educacionais:

* **Auth0**
* **Okta**
* **Amazon Cognito**
* **Google**

> Para cada provedor, é necessário substituir o arquivo principal `src/index.tsx` pelo correspondente (`index.auth0.tsx`, `index.okta.tsx`, etc.) e rodar com o script dedicado (`yarn dev:auth0`, `yarn dev:okta` etc).

---

## 📜 Licença

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

Este projeto está licenciado sob os termos da licença MIT.

---

## 🤝 Contribuidores

<table>
  <tr>
    <td align="center"><a href="http://www.kevinold.com"><img src="https://avatars0.githubusercontent.com/u/21967?v=4" width="100" alt="Kevin Old" /><br /><sub><b>Kevin Old</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/amirrustam"><img src="https://avatars0.githubusercontent.com/u/334337?v=4" width="100" alt="Amir Rustamzadeh" /><br /><sub><b>Amir Rustamzadeh</b></sub></a></td>
    <td align="center"><a href="https://twitter.com/be_mann"><img src="https://avatars2.githubusercontent.com/u/1268976?v=4" width="100" alt="Brian Mann" /><br /><sub><b>Brian Mann</b></sub></a></td>
    <td align="center"><a href="https://glebbahmutov.com/"><img src="https://avatars1.githubusercontent.com/u/2212006?v=4" width="100" alt="Gleb Bahmutov" /><br /><sub><b>Gleb Bahmutov</b></sub></a></td>
    <td align="center"><a href="http://www.bencodezen.io"><img src="https://avatars0.githubusercontent.com/u/4836334?v=4" width="100" alt="Ben Hong" /><br /><sub><b>Ben Hong</b></sub></a></td>
    <td align="center"><a href="https://github.com/davidkpiano"><img src="https://avatars2.githubusercontent.com/u/1093738?v=4" width="100" alt="David Khourshid" /><br /><sub><b>David Khourshid</b></sub></a></td>
  </tr>
</table>

Este projeto segue a especificação [all-contributors](https://github.com/all-contributors/all-contributors).
Contribuições de qualquer tipo são bem-vindas!

---

**Happy Testing! 🧪**
