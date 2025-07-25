describe('Registro de Usuário', () => {
  // Evita que o erro CORS quebre o teste
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // impede falha no teste
  });

  it('Preenche o formulário de registro', () => {
    cy.visit('https://demoqa.com/register');

    cy.get('#firstname').type('Aline');
    cy.get('#lastname').type('Teste');
    cy.get('#userName').type('alineteste2');
    cy.get('#password').type('SenhaForte123@');

    cy.get('input[value="Register"]').click();

    });
});
