describe('Testes de Login no DemoQA com password inválido', () => {

  // Ignorar erros de CORS para evitar que erros de script que não possam ser capturados quebrem os testes
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignorar erros de CORS ou erros de script de origem cruzada
      if (err.message.includes('Script error')) {
        return false;  
      }
      return true;  
    });
  });

  
  it('Deve exibir erro de login com password inválido', () => {

    cy.visit('https://demoqa.com/login');

   
    cy.get('#userName').type('josesilva'); 
    cy.get('#password').type('1234Teste');  

    
    cy.get('#login').click();

   
    cy.contains('Invalid username or password').should('be.visible');  
  });

});
