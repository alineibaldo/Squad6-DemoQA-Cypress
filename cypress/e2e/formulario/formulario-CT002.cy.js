describe('Testes do Formulário Text Box - Validar envio campo FullName vazio', () => {

  // Ignora erros de scripts externos que não afetam os testes
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

  it('CT002 - Validar envio com campo FullName vazio', () => {
    // Não preenche o campo de Full Name, deixando ele vazio
    cy.get('#userEmail').type('joaoemaria@teste.com.br'); 
    cy.get('#currentAddress').type('Rua exemplo, 123');   
    cy.get('#permanentAddress').type('Rua final, 456');    
    
   
    cy.get('#submit').click();
    
    
    cy.get('#output').should('contain', '');  
  });

});


