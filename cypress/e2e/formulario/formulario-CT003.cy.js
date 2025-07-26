describe('Testes do Formulário Text Box', () => {

 // Ignora erros de scripts externos que não afetam os testes
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });



  it('CT003 - FullName com apenas um nome', () => {
    cy.get('#userName').type('Maria');
    cy.get('#userEmail').type('maria@teste.com.br');
    cy.get('#currentAddress').type('Rua Um, 1');
    cy.get('#permanentAddress').type('Rua Dois, 2');
    cy.get('#submit').click();

    cy.get('#output').should('contain', 'Maria');
  });



});