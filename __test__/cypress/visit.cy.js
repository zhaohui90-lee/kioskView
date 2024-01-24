const { it } = require('vitest')
const { describe } = require('vitest')

describe('first visit', () => {
  it('visit ', () => {
    cy.visit('https://example.cypress.io')
  })
})
