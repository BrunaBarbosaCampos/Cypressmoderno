///<reference types="cypress"/> 

import loc from '../support/Locators'


describe('Works with a project', ()=> {
    beforeEach(()=>{
        cy.visit('https://barrigareact.wcaquino.me')
    })


    it.only('Login', () => {
        cy.get(loc.LOGIN.PASSWORD).type('bruna@teste')
        cy.get(loc.LOGIN.PASSWORD).type('b@t')
        cy.get(loc.LOGIN.BOTAO).click()
        cy.get(loc.MENSAGEM.SUCESSO).should('contain', 'Bem vindo, brunateste!')
    
    })

    it('Insert account', () => {
        cy.get('[data-test="email"]').type('bruna@teste')
        cy.get('[data-test="passwd"]').type('b@t')
        cy.get('.btn').click()
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.toast-success').should('contain', 'Conta inserida com sucesso!')
    })


    it('Should update an account ', () => {
        cy.get('[data-test="email"]').type('bruna@teste')
        cy.get('[data-test="passwd"]').type('b@t')
        cy.get('.btn').click()
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('.table td').should('contain', 'Conta teste')
        cy.get('tbody td').contains('Conta teste').parent().find('[class="far fa-edit"]').click()
        cy.get('[data-test="nome"]').clear()
        cy.get('[data-test="nome"]').type('Conta teste editada')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso!')
    })



})