///<reference types="cypress"/> 


import '../support/commandsaccount'

describe('Works with a project', ()=> {
    beforeEach(()=>{
        cy.visit('https://barrigareact.wcaquino.me')
    })


    it('Login', () => {
        cy.login_user('bruna@teste', 'b@t')
        cy.ResetApp()
    })

    it('Insert account', () => {
        cy.login_user('bruna@teste', 'b@t')
        cy.Acesscont()
        cy.Addcont('Conta teste')
    })


    it('Should update an account ', () => {
        cy.login_user('bruna@teste', 'b@t')
        cy.Acesscont()
        cy.Updatecont('Conta teste editada')
        
    })



})