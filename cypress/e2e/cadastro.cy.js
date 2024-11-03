describe('cadastro', () => {
    it('cadastrar um walkdog', () => {
      cy.visit('/signup');
      cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('Maria Luisa');
      cy.get(':nth-child(3) > :nth-child(1) > input').type('maluzinha@gmail.com');
      cy.get(':nth-child(3) > :nth-child(2) > input').type('12264641502');
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('60850-570');
      cy.get(':nth-child(2) > :nth-child(2) > input').click();
      cy.get(':nth-child(4) > :nth-child(1) > input').type('22');
      cy.get(':nth-child(4) > :nth-child(2) > input').type(' Lote 47 Quadra 145');
      cy.get('.walker-service > :nth-child(1)').click();
      cy.get('.walker-service > :nth-child(2)').click();
      cy.get('.dropzone > input').attachFile('cnh.jpg');
      cy.get('.button-register').click();
    });

    it(' não deve cadastrar um walkdog com um cpf inválido', () => {
      cy.visit('/signup');
      cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('Maria Luisa');
      cy.get(':nth-child(3) > :nth-child(1) > input').type('maluzinha@gmail.com');
      cy.get(':nth-child(3) > :nth-child(2) > input').type('122646415bn');
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('60850-570');
      cy.get(':nth-child(2) > :nth-child(2) > input').click();
      cy.get(':nth-child(4) > :nth-child(1) > input').type('22');
      cy.get(':nth-child(4) > :nth-child(2) > input').type(' Lote 47 Quadra 145');
      cy.get('.walker-service > :nth-child(1)').click();
      cy.get('.walker-service > :nth-child(2)').click();
      cy.get('.dropzone > input').attachFile('cnh.jpg');
      cy.get('.button-register').click();
      cy.get('.alert-error').should('have.text','CPF inválido');
    });
});