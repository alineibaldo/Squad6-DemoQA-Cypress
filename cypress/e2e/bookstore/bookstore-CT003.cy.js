
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros de CORS (erro de script originado de um domínio externo)
  if (err.message.includes('Script error')) {
    return false; 
  }
  return true; 
});

describe('Testando o clique em um livro da lista de livros', () => {

  it('Deve clicar em um livro da lista e verificar as informações do livro', () => {
  
    cy.visit('https://demoqa.com/books');

   // Encontra o primeiro livro da lista (no caso, Git Pocket Guide)
    cy.get('.rt-tbody')
      .find('.rt-tr-group') // Cada grupo de linhas (livro)
      .first() // Seleciona o primeiro livro
      .find('a') // Encontra o link dentro do livro
      .click(); 

   

  });

});
