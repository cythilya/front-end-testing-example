describe('Index page', () => {
  it('should update snapshot to Percy correctly', () => {
    cy.visit('https://mixtini-co.web.app/');
    cy.percySnapshot('index');
  });
});
