describe('My First Test', function() {
    it('opening a home page and searching by Genre', function() {
        cy.visit('/')

        cy.contains('GENRE').click().click()

        cy.get('.c-search_field_input').click()
            .type('adventure')
            .should('have.value', 'adventure')
  })
})