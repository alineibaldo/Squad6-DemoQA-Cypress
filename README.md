📌 Visão Geral

Este projeto realiza testes automatizados no site DemoQA utilizando o framework Cypress. Foram implementados cenários de teste para três módulos principais: Book Store, Formulários e Login.

https://img.shields.io/badge/cypress-12.17.0-brightgreen
https://img.shields.io/badge/node-18.x-blue
🚀 Pré-requisitos

    Node.js 16+

    npm 8+

    Git (para controle de versão)

⚙️ Configuração do Ambiente
bash

# Clone o repositório
git clone https://github.com/seu-usuario/Squad6-DemoQA-Cypress-automacao-3-cenarios.git

# Instale as dependências
npm install

# Instale o Cypress (se necessário)
npx cypress install

🧪 Executando os Testes

Modo interativo:
bash

npx cypress open

Modo headless:
bash

npx cypress run

Executar testes específicos:
bash

# Todos os testes de login
npx cypress run --spec "cypress/e2e/login/*.cy.js"

# Um teste específico
npx cypress run --spec "cypress/e2e/formulario/formulario-CT001.cy.js"

📋 Suites de Teste Implementadas
1. Book Store

Localização: cypress/e2e/bookstore/

Cenários testados:

    CT001: Pesquisa por livro existente

    CT002: Pesquisa por livro inexistente

    CT003: Navegação para página de detalhes do livro

Dados de teste:
javascript

// Exemplo de livro usado nos testes
const testBook = {
  title: 'Git Pocket Guide',
  author: 'Richard E. Silverman'
}

2. Formulários

Localização: cypress/e2e/formulario/

Cenários testados:

    CT001: Preenchimento válido do Text Box

    CT002: Validação de campo FullName vazio

    CT003: Validação de FullName com apenas um nome

    CT004: Validação de e-mail inválido

    CT005: Validação de todos os campos vazios

3. Login

Localização: cypress/e2e/login/

Cenários testados:

    CT001: Login com credenciais válidas

    CT002: Login com username inválido

    CT003: Login com password inválido

Dados de teste:
javascript

const validUser = {
  username: 'josesilva',
  password: '1234@Teste'
}

🛠️ Estrutura do Projeto
text

cypress/
├── e2e/
│   ├── bookstore/            # Testes da livraria
│   │   ├── bookstore-CT001.cy.js
│   │   ├── bookstore-CT002.cy.js
│   │   └── bookstore-CT003.cy.js
│   ├── formulario/           # Testes de formulários
│   │   ├── formulario-CT001.cy.js
│   │   ├── ... (outros CTs)
│   └── login/                # Testes de login
│       ├── login-CT001.cy.js
│       ├── ... (outros CTs)
├── fixtures/                 # Dados de teste
│   └── example.json
└── support/                  # Configurações e comandos
    ├── commands.js
    └── e2e.js

🔧 Configurações Especiais
Tratamento de Erros Cross-Origin

Adicionado em cada arquivo de teste:
javascript

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error')) {
    return false
  }
  return true
})

Configuração Global

No cypress.config.js:
javascript

module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
}
