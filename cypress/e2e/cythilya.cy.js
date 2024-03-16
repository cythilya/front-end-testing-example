describe('about page', () => {
  it('should get title correctly when visit page', () => {
    cy.visit('https://www.cythilya.tw/about');

    cy.get('.page-title').should('have.text', '關於我');
    cy.compareSnapshot('cythilya-about', 0.5);
  });
});
