///< reference types = "cypress" />
///< reference types = "cypress-iframe" />

import 'cypress-iframe';

describe('Work with Popups', () => {
        beforeEach(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
            cy.reload()
        })

    it('Deve abrir popup', () => {
        cy.get('#buttonPopUp').click()
    })



    it('Abre o popup e verifica o texto', () => {
        cy.get('[href="./frame.html"]').invoke('removeAttr', 'target').click()
        cy.get('#tfield').type('funciona?')
        cy.get('#tfield').should('have.value', 'funciona?')
    
    })


    it.only('Abre o popup e verifica a url', () => {
        cy.get('[href="./frame.html"]').invoke('removeAttr', 'target').click()
        cy.url().should('include', '/frame.html')
    
    })
})