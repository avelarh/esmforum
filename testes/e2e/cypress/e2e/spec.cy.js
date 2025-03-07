describe('Primeiro teste end-to-end', () => {
  it('Cadastra uma pergunta e verifica se ela é listada', () => {
    cy.visit('localhost:3000');
    
    cy.get('#textarea-pergunta').type('3+3');
    cy.get('#btn-pergunta').click();
    cy.get('#tabela-perguntas').contains('3+3');

    //cy.visit('localhost:3000/resposta/1');
  });
});

describe('Segundo teste end-to-end', () => {
  it('Cadastra uma resposta e verifica se ela é listada', () => {
    cy.visit('localhost:3000/resposta/1');
    
    cy.get('#textarea-resposta').type('6');
    cy.get('#btn-resposta').click();
    cy.get('#tabela-respostas').contains('6');
  });
});





