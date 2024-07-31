///< reference types = "cypress"/>

describe('Work with alerts', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })



    it('Alert', () => {  //Como trabalhar com alertas simples em uma página
        cy.get('#alert').click() //Botão que dispara o alerta
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Alert Simples')
        })
    })



    it('Confirm', ()=> {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })


        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })

    })

    it('Deny', ()=> {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })


        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })

    })

    it('Prompt', ()=> {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })

        cy.get('#prompt').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })

    })


    it('Realizando cadastro', () => {

        
        cy.get('#formNome').type('Bruna')
        cy.get('#formSobrenome').type('Campos')
        cy.get('[type="radio"]').check('F')
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
        cy.get('#descNome span').should('have.text', 'Bruna')
        cy.get('#descSobrenome span').should('have.text', 'Campos')
        cy.get('#descSexo span').should('have.text', 'Feminino')
        })



    it('Validando alerts em cadastro', () => {
        const alertmessage = []

        cy.on('window:alert', (msg) => {
            alertmessage.push(msg)
        })

        //primeiro alerta
        cy.get('#formCadastrar').click()
        cy.wrap(alertmessage).should('include', 'Nome eh obrigatorio')

        //segundo alerta
        cy.get('#formNome').type('Bruna')
        cy.get('#formCadastrar').click()
        cy.wrap(alertmessage).should('include', 'Sobrenome eh obrigatorio')

        //terceiro alerta
        cy.get('#formNome').type('Bruna')
        cy.get('#formSobrenome').type('Campos')
        cy.get('#formCadastrar').click()
        cy.wrap(alertmessage).should('include', 'Sexo eh obrigatorio')



    })


})