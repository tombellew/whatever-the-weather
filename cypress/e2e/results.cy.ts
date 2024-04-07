describe('User can view the search results', () => {
  it('passes', () => {
    cy.visit('http://localhost:1337')
    cy.get('[data-cy="search-input"]').type('London')
    cy.get('[data-cy="search-btn"]').click()
    cy.wait(2000)
    cy.get('[data-cy="forecast-card"]').should('have.length', 5)
  })
})
