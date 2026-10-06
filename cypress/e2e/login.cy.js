describe('Login Test', () => {

    it('should open example website', () => {

        cy.visit('https://example.cypress.io')

        cy.contains('Kitchen Sink')

    })

})