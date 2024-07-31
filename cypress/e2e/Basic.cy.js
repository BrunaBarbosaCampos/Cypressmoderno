///<reference types="cypress" />


describe('Cypress basics', () => {

    beforeEach (() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Should visit a page and assert title', () => {
        cy.title().should('contain', 'Campo')
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('eq','Campo de Treinamento')
    })



    it('Should find and interact with an element', () => {
        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')


        cy.clock()
        cy.get('#buttonLazy').click()
        cy.tick(3000)
        cy.get('#buttonLazy').should('have.value', 'zZz ZzZ!')

        cy.clock()
        cy.get('#buttonCount').click()
        cy.tick(3000)
        cy.get('#buttonCount').should('have.value', '11')
    })

})
