import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('should get 1 when click the increment button', () => {
    cy.mount(<Counter />)

    cy.get('[data-test-id="increment-button"]').click();

    cy.get('[data-test-id="counter-value"]').should('have.text', '1');
  })

  it('should get -1 when click the decrement button', () => {
    cy.mount(<Counter />)

    cy.get('[data-test-id="decrement-button"]').click();

    cy.get('[data-test-id="counter-value"]').should('have.text', '-1');
  });
})
