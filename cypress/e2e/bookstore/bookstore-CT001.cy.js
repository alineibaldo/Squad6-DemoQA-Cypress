describe('Pesquisa de livros', () => {
  // Ignora erros de scripts de terceiros (ex: CORS)
  Cypress.on('uncaught:exception', () => false);

  it('Pesquisa por um livro existente', () => {
    cy.visit('https://demoqa.com/books');

    // Espera garantir que a página carregou
    cy.get('#searchBox').should('be.visible').type('Git Pocket Guide');

    // Verifica se o livro aparece
    cy.get('.rt-tbody')
      .should('contain', 'Git Pocket Guide')
      .and('contain', 'Richard E. Silverman');
  });

});

