import ImageList from './ImageList';

describe('ImageList', () => {
  it('should render no data prompt when no images', () => {
    cy.intercept('GET', 'https://dummyjson.com/products', {
      statusCode: 200,
      body: { products: [] },
    }).as('apiRequest');

    cy.mount(<ImageList />);

    cy.get('[data-test-id="no-data-prompt"]').should('exist');
  });

  it('should render correct image items when have data', () => {
    cy.intercept('GET', 'https://dummyjson.com/products', {
      statusCode: 200,
      body: {
        products: [
          {
            id: '1',
            title: '打造高速網站，從網站指標開始！全方位提升使用者體驗與流量的關鍵',
            images: ['https://bit.ly/4228IT0'],
          },
          {
            id: '2',
            title: '島波海道。單車跳島之旅',
            images: ['https://bit.ly/4b5nLPO'],
          },
        ],
      },
    }).as('apiRequest');

    cy.mount(<ImageList />);

    cy.get('[data-test-id="image-item-title"]').should('have.length', 2);
    cy.contains('打造高速網站');
    cy.contains('島波海道');
  });
});
