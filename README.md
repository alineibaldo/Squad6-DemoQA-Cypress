## 📽️ Apresentação

A apresentação do projeto está disponível no link abaixo:

🔗 [Acessar apresentação no Canva](https://www.canva.com/design/DAGt7ysXQLk/kucw9ga9LJ0WPT8bYJbP0g/view?utm_content=DAGt7ysXQLk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5839ff36c6O)
Se quiser que o link abra em uma nova aba (em ambientes que suportam HTML), pode usar:
html

<a href="https://www.canva.com/design/DAGt7ysXQLk/kucw9ga9LJ0WPT8bYJbP0g/view?utm_content=DAGt7ysXQLk&utm_campaign

## Autores

- Aline Ibaldo Gonçalves  
- Erick Rodrigues de Oliveira 
- Fábio Vinícius 
- Katleen Lima Barros

# 📌 Visão Geral

Este projeto realiza testes automatizados no site **DemoQA** utilizando o framework **Cypress**. Foram implementados cenários de teste para três módulos principais: **Book Store**, **Formulários** e **Login**.

[![Cypress](https://img.shields.io/badge/cypress-12.17.0-brightgreen)](https://www.cypress.io/)
[![Node.js](https://img.shields.io/badge/node-18.x-blue)](https://nodejs.org/)

---

## 🚀 Pré-requisitos

Antes de rodar os testes, certifique-se de ter os seguintes pré-requisitos instalados:

- **Node.js** (versão 16 ou superior)
- **npm** (versão 8 ou superior)
- **Git** (para controle de versão)

---

## ⚙️ Configuração do Ambiente

### 1. Clone o Repositório

```bash
git clone https://github.com/seu-usuario/Squad6-DemoQA-Cypress-automacao-3-cenarios.git
2. Instale as Dependências
bash

npm install
3. Instale o Cypress (se necessário)
bash

npx cypress install
🧪 Executando os Testes
Existem dois modos principais para rodar os testes:

Modo Interativo:
bash

npx cypress open
Modo Headless:
bash

npx cypress run
Executar Testes Específicos:
Todos os testes de Login:

bash

npx cypress run --spec "cypress/e2e/login/*.cy.js"
Um teste específico:

bash

npx cypress run --spec "cypress/e2e/formulario/formulario-CT001.cy.js"
📋 Suites de Teste Implementadas
1. Book Store
Localização: cypress/e2e/bookstore/

Cenários Testados:

CT001: Pesquisa por livro existente

CT002: Pesquisa por livro inexistente

CT003: Navegação para página de detalhes do livro

Dados de Teste:
javascript

// Exemplo de livro usado nos testes
const testBook = {
  title: 'Git Pocket Guide',
  author: 'Richard E. Silverman'
}
2. Formulários
Localização: cypress/e2e/formulario/

Cenários Testados:

CT001: Preenchimento válido do Text Box

CT002: Validação de campo FullName vazio

CT003: Validação de FullName com apenas um nome

CT004: Validação de e-mail inválido

CT005: Validação de todos os campos vazios

3. Login
Localização: cypress/e2e/login/

Cenários Testados:

CT001: Login com credenciais válidas

CT002: Login com username inválido

CT003: Login com password inválido

Dados de Teste:
javascript


const validUser = {
  username: 'josesilva',
  password: '1234@Teste'
}
🛠️ Estrutura do Projeto
bash


cypress/
├── e2e/                          # Testes automatizados
│   ├── bookstore/                # Testes da livraria
│   │   ├── bookstore-CT001.cy.js
│   │   ├── bookstore-CT002.cy.js
│   │   └── bookstore-CT003.cy.js
│   ├── formulario/               # Testes de formulários
│   │   ├── formulario-CT001.cy.js
│   │   ├── ... (outros CTs)
│   └── login/                    # Testes de login
│       ├── login-CT001.cy.js
│       ├── ... (outros CTs)
├── fixtures/                     # Dados de teste
│   └── example.json
└── support/                      # Configurações e comandos do Cypress
    ├── commands.js               # Comandos personalizados
    └── e2e.js                    # Configurações globais

🔧 Configurações Especiais
1. Tratamento de Erros Cross-Origin
Adicionado em cada arquivo de teste para tratar erros de scripts externos:
javascript

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error')) {
    return false; // Ignora erro de scripts externos
  }
  return true;
});

2. Configuração Global
No arquivo cypress.config.js:
javascript

module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com',          // URL base para os testes
    defaultCommandTimeout: 10000,           // Tempo de espera padrão para comandos
    setupNodeEvents(on, config) {
      // Adicione event listeners, se necessário
    },
  },
};


