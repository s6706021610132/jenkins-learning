describe('Calculator Test', () => {

    it('should calculate 10 + 5 = 15', () => {

        cy.visit('http://localhost:3000')

        cy.get('#num1').type('10')
        cy.get('#num2').type('5')

        cy.contains('button', 'Add').click()

        cy.get('#result')
            .should('have.text', 'Result: 15')
    })

})