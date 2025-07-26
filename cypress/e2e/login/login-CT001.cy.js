describe('Testes de Login no DemoQA', () => {

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

  it('Deve fazer o login com sucesso', () => {
   
    cy.visit('https://demoqa.com/login');

    
    cy.get('#userName').type('josesilva');  
    cy.get('#password').type('1234@Teste');  

    
    cy.get('#login').click();

    
    cy.url().should('include', '/profile');  
    cy.contains('Profile').should('be.visible'); 
  });

}); 