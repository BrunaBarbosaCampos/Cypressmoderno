///<reference types="cypress"/> 




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
        cy.Addcont('Conta teste')
    })


    it('Should update an account ', () => {
        cy.login_user('bruna@teste', 'b@t')
        cy.Updatecont('Conta teste editada')
        
    })



})