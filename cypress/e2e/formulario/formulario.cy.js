// cypress/e2e/formulario.cy.js

describe('Testes do Formulário Text Box', () => {

 // Ignora erros de scripts externos que não afetam os testes
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

  // Cenário 1: Preenchimento do formulário com dados válidos

  it('CT001 - Validar preenchimento com dados válidos', () => {
    cy.get('#userName').type('Maria Silva');
    cy.get('#userEmail').type('mariasilva@teste.com.br');
    cy.get('#currentAddress').type('Rua teste, 666');
    cy.get('#permanentAddress').type('Rua testando, 333');
    cy.get('#submit').click();

    cy.get('#output').should('contain', 'Maria Silva')
                      .and('contain', 'mariasilva@teste.com.br')
                      .and('contain', 'Rua teste, 666')
                      .and('contain', 'Rua testando, 333');
  });

  it('CT002 - Validar envio com caracteres especiais no nome', () => {
    cy.get('#userName').type('João & Maria');
    cy.get('#userEmail').type('joaoemaria@teste.com.br');
    cy.get('#currentAddress').type('Rua exemplo, 123');
    cy.get('#permanentAddress').type('Rua final, 456');
    cy.get('#submit').click();

    cy.get('#output').should('contain', 'João & Maria');
  });

  it('CT003 - Validar envio com e-mail em caixa alta', () => {
    cy.get('#userName').type('Pedro Souza');
    cy.get('#userEmail').type('PEDRO@TESTE.COM');
    cy.get('#currentAddress').type('Rua Central, 111');
    cy.get('#permanentAddress').type('Rua Oeste, 222');
    cy.get('#submit').click();

    cy.get('#output').should('contain', 'PEDRO@TESTE.COM');
  });

  // Cenário 2: Validação de campos obrigatórios e formato de entrada

  it('CT004 - Campo de e-mail com formato inválido', () => {
    cy.get('#userName').type('Maria Silva');
    cy.get('#userEmail').type('maria.silva[arroba]teste');
    cy.get('#currentAddress').type('Rua teste, 666');
    cy.get('#permanentAddress').type('Rua testando, 333');
    cy.get('#submit').click();

    cy.get('#userEmail:invalid').should('exist');
  });

  it('CT005 - Nome com apenas um nome', () => {
    cy.get('#userName').type('Maria');
    cy.get('#userEmail').type('maria@teste.com.br');
    cy.get('#currentAddress').type('Rua Um, 1');
    cy.get('#permanentAddress').type('Rua Dois, 2');
    cy.get('#submit').click();

    cy.get('#output').should('contain', 'Maria');
  });

  it('CT006 - Todos os campos vazios', () => {
    cy.get('#submit').click();
    // Como não existe validação automática, podemos verificar se não há output
    cy.get('#output').should('not.exist');
  });

});