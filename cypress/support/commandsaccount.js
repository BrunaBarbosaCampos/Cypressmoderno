import loc from '../support/Locators' 


Cypress.Commands.add('Acesscont', () => {
    cy.get(loc.CONFIGS.BT_CONFIG).click()
    cy.get(loc.CONFIGS.OPC_CONTA).click()
})


Cypress.Commands.add('Addcont', (nomeconta1) => {
    cy.get(loc.CONT.NAME).type(nomeconta1)
    cy.get(loc.CONT.BT_ADD).click()
    cy.get(loc.MENSAGE, {timeout:3000}).should('contain', 'Conta inserida com sucesso!')
})
    
    
Cypress.Commands.add('Updatecont', (nomeconta2) => {
    cy.get('.table td').should('contain', 'Conta teste')
    cy.get('tbody td').contains('Conta teste').parent().find('[class="far fa-edit"]').click()
    cy.get(loc.CONT.NAME).clear()
    cy.get(loc.CONT.NAME).type(nomeconta2)
    cy.get(loc.CONT.BT_ADD).click()
    cy.get(loc.MENSAGE).should('contain', 'Conta atualizada com sucesso!')
})

