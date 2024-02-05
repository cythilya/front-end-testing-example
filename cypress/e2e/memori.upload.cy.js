describe('upload page', () => {
  describe('desktop', () => {
    it('should get error message when upload file with pdf format', () => {
      cy.visit('https://memori-ui-upload.web.app/?serviceId=webconf2023');

      cy.get('#message').type('hello world!');
      cy.get('input[type=file]').selectFile('cycling.jpeg', {
        action: 'drag-drop',
        force: true,
      });
      cy.get('button').contains('送出').click();

      cy.get('.MuiAlert-message ').contains('有點問題！').should('exist');
    });
  });

  describe('mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should get error message when upload file with pdf format', () => {
      cy.visit('https://memori-ui-upload.web.app/?serviceId=webconf2023');

      cy.get('#name').type('summer');
      cy.get('#message').type('hello world!');
      cy.get('input[type=file]').selectFile('cycling.jpeg', {
        action: 'drag-drop',
        force: true,
      });
      cy.get('button').contains('送出').click();

      cy.get('.MuiAlert-message ').contains('有點問題！').should('exist');
    });
  });
});
