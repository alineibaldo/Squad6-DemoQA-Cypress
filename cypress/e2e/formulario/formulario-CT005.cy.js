describe('Testes do Formulário Text Box', () => {

 // Ignora erros de scripts externos que não afetam os testes
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });



  it('CT006 - Todos os campos vazios', () => {
    cy.get('#submit').click();
    
  });

});