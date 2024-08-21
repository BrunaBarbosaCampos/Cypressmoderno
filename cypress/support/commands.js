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

Cypress.Commands.add('Addcont', (nomeconta1) => {
cy.get(loc.CONFIGS.BT_CONFIG).click()
cy.get(loc.CONFIGS.OPC_CONTA).click()
cy.get(loc.CONT.NAME).type(nomeconta1)
cy.get(loc.CONT.BT_ADD).click()
cy.get(loc.MENSAGE, {timeout:3000}).should('contain', 'Conta inserida com sucesso!')
})


Cypress.Commands.add('Updatecont', (nomeconta2) => {
cy.get(loc.CONFIGS.BT_CONFIG).click()
cy.get(loc.CONFIGS.OPC_CONTA).click()
cy.get('.table td').should('contain', 'Conta teste')
cy.get('tbody td').contains('Conta teste').parent().find('[class="far fa-edit"]').click()
cy.get(loc.CONT.NAME).clear()
cy.get(loc.CONT.NAME).type(nomeconta2)
cy.get(loc.CONT.BT_ADD).click()
cy.get(loc.MENSAGE).should('contain', 'Conta atualizada com sucesso!')
})