import Hello from './Hello';

describe('Hello', () => {
  it('should show image title correctly', () => {
    cy.mount(<Hello />);

    cy.get('.text').should('have.text', '這是測試文字');
  });
});
