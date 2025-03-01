# Biblia365

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Estrutura do Projeto Frontend


biblia365/
│
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── auth.service.ts       # Serviço de autenticação (login, cadastro)
│   │   │   ├── auth.interceptor.ts   # Interceptor para adicionar token ao header
│   │   │   ├── login.component.ts    # Componente de login
│   │   │   ├── login.component.html  # Template do login
│   │   │   ├── cadastro.component.ts # Componente de cadastro
│   │   │   └── cadastro.component.html # Template do cadastro
│   │
│   │   ├── bible/
│   │   │   ├── bible.service.ts       # Serviço para consumir a API da Bíblia
│   │   │   ├── leitura-biblia.component.ts  # Componente para leitura da Bíblia
│   │   │   ├── leitura-biblia.component.html  # Template da leitura da Bíblia
│   │   │   ├── livro-biblia.component.ts    # Componente para exibir livros e capítulos
│   │   │   └── livro-biblia.component.html  # Template do livro da Bíblia
│   │
│   │   ├── plano-leitura/
│   │   │   ├── plano-leitura.component.ts    # Componente para o plano de leitura
│   │   │   ├── plano-leitura.component.html  # Template do plano de leitura
│   │   │   └── plano-leitura.service.ts      # Serviço para gerenciar o plano de leitura
│   │
│   │   ├── navbar/
│   │   │   └── navbar.component.ts          # Componente do navbar
│   │   │   └── navbar.component.html        # Template do navbar
│   │
│   │   ├── home/
│   │   │   └── home.component.ts            # Componente da página inicial
│   │   │   └── home.component.html          # Template da página inicial
│   │
│   │   ├── sobre/
│   │   │   └── sobre.component.ts           # Componente da página Sobre
│   │   │   └── sobre.component.html         # Template da página Sobre
│   │
│   │   ├── area-estudante/
│   │   │   └── area-estudante.component.ts  # Componente da área do estudante
│   │   │   └── area-estudante.component.html # Template da área do estudante
│   │
│   │   ├── app.component.ts                 # Componente principal
│   │   ├── app.component.html               # Template principal
│   │   ├── app.module.ts                   # Módulo principal do Angular
│   │   ├── app-routing.module.ts            # Roteamento do Angular
│   │
│   ├── assets/
│   │   └── images/                         # Imagens usadas no front-end
│   ├── environments/
│   │   ├── environment.ts                  # Variáveis de ambiente para o front-end
│   │   └── environment.prod.ts             # Configurações para ambiente de produção
│   ├── styles.css                          # Estilos globais
│   └── index.html                          # Arquivo HTML principal
│
├── angular.json                           # Configurações do Angular
├── package.json                           # Dependências e scripts do front-end
├── tsconfig.json                          # Arquivo de configuração do TypeScript
└── tslint.json                            # Arquivo de configuração do TSLint

```bash
npm install jspdf
```
