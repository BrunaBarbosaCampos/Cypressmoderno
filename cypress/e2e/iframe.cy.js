///< reference types = "cypress" />
///< reference types = "cypress-iframe" />

import 'cypress-iframe';

describe('Work with iframes', () => {
        beforeEach(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
            cy.reload()
        })



    it('Deve preencher campo de texto', () => {
        cy.frameLoaded('#frame1')
        cy.iframe('#frame1').find('#tfield').type('funciona?')
        cy.iframe('#frame1').find('#tfield').should('have.value', 'funciona?')
    })


    // it('Deve validar botão dentro do iframe', () => {
    //     cy.visit('https://www.wcaquino.me/cypress/frame.html')
    //     cy.get('#otherButton').click()

    //     cy.on('window:alert', msg => {
    //         expect(msg).to.be.equal('Click OK!')
    //     })

        
    // })



})