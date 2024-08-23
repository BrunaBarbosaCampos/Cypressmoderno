// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from '../support/Locators'


Cypress.Commands.add('login_user', (user, psswrd) => {
cy.get(loc.LOGIN.USER).type(user)
cy.get(loc.LOGIN.PASSWORD).type(psswrd)
cy.get(loc.LOGIN.BT_LOGIN).click()
cy.get(loc.MENSAGE).should('contain', 'Bem vindo, brunateste!')
})


Cypress.Commands.add('ResetApp', () => {
    cy.get(loc.CONFIGS.BT_CONFIG).click()
    cy.get(loc.CONFIGS.OPC_RESET).click()
    cy.get(loc.MENSAGE).should('contain', 'Dados resetados com sucesso!')

})
