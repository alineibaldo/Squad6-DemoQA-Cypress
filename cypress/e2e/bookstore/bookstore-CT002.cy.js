describe('Pesquisa de livro inexistente', () => {
  // Ignora erros de scripts de terceiros (ex: CORS)
  Cypress.on('uncaught:exception', () => false);



  it('Pesquisa por um livro inexistente', () => {
    cy.visit('https://demoqa.com/books');

    cy.get('#searchBox').type('Livro Inexistente');

    cy.get('.rt-noData').should('contain', 'No rows found');
  });
});
