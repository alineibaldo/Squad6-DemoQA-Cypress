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

  

});