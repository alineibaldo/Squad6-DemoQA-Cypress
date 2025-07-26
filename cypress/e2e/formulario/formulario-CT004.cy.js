describe('Testes do Formulário Text Box', () => {

 // Ignora erros de scripts externos que não afetam os testes
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

 

  it('CT004 - Campo de e-mail com formato inválido', () => {
    cy.get('#userName').type('Maria Silva');
    cy.get('#userEmail').type('maria.silva[arroba]teste');
    cy.get('#currentAddress').type('Rua teste, 666');
    cy.get('#permanentAddress').type('Rua testando, 333');
    cy.get('#submit').click();

    cy.get('#userEmail:invalid').should('exist');
  });

  


});