describe('User can enter a search query', () => {
  it('passes', () => {
    cy.visit('http://localhost:1337')
    cy.get('[data-cy="search-input"]').type('London')
    cy.get('[data-cy="search-btn"]').click()
  })
})
