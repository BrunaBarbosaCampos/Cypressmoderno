///<reference types="cypress"/> 

import loc from '../support/Locators'
import '../support/commandsaccount'

describe('Works with a project', ()=> {
    beforeEach(()=>{
        cy.visit('https://barrigareact.wcaquino.me')
    })


    it('Login', () => {
        cy.login_user()
        cy.ResetApp()
    })

    it('Insert account', () => {
        cy.login_user()
        cy.Acesscont()
        cy.Addcont('Conta teste')
        cy.get(loc.MENSAGE, {timeout:3000}).should('contain', 'Conta inserida com sucesso!')
    })


    it('Should update an account ', () => {
        cy.login_user()
        cy.Acesscont()
        cy.Updatecont('Conta teste editada')
        
    })

    it('Should not create accout repeted', () => {
        cy.login_user()
        cy.Acesscont()
        cy.Addcont('Conta teste editada')
        cy.get(loc.MENSAGE).should('contain', 'Error: Request failed with status code 400')
    })

})