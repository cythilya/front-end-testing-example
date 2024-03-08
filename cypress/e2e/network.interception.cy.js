describe('Network interception', () => {
  it('should intercept network request ', () => {
    cy.intercept('GET', 'https://www.cythilya.tw/about/', (req) => {
      // 攔截網路請求並回傳自定義的回應
      req.reply({
        statusCode: 200,
        body: 'Connection refused',
      });
    });

    // 瀏覽網站
    cy.visit('https://www.cythilya.tw/about/');
  });
});
