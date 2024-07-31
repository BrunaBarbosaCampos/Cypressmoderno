///<reference types="cypress" />

describe('Working with basic elements', () => {
   beforeEach(()=>{
         cy.visit('https://wcaquino.me/cypress/componentes.html')
         cy.reload()
   })



   it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')


        
      })


      it('Links', () => {
            cy.get('[href="#"]').click()
            cy.get('#resultado').should('have.text', 'Voltou!')


            cy.reload()
            cy.get('#resultado').should('not.have.text', 'Voltou!')
            cy.contains('Voltar').click()
            cy.get('#resultado').should('have.text', 'Voltou!')

      })


      it('TextFields', () => {

            cy.get('#formNome').type('Cypress Test')
            cy.get('#formNome').should('have.value', 'Cypress Test')
            cy.get('#formSobrenome').type('Sobrenome Test')

            cy.get('#elementosForm\\:sugestoes').type('textarea')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('Teste de input')

      })


      it('RadioButton', () => {
            cy.get('#formSexoFem').check().should('be.checked')
            cy.get('#formSexoMasc').should('not.be.checked')
            cy.get('[name=formSexo]').should('have.length', 2)
            cy.get('[name="formSexo"]').should('have.length', 2)
      })


      it('Checkbox', () => {
            cy.get('#formComidaPizza').check().should('have.value', 'pizza')

            cy.reload()
            cy.get('#formComidaPizza').check().should('have.value', 'pizza')
            cy.get('#formComidaFrango').check().should('have.value', 'frango')

            cy.reload()
            cy.get('[name=formComidaFavorita]').click({multiple:true})
            cy.get('[name=formComidaFavorita]').should('be.checked')
      })


      it.only('Combo', () => {
            cy.get('#formEscolaridade').select('2o grau incompleto').should('have.value', '2grauincomp')
            cy.get('#formEscolaridade').select('1graucomp').should('have.value', '1graucomp')


            cy.get('#formEsportes').select(['natacao', 'Corrida', 'nada'])
            cy.get('#formEsportes').invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
      })


it('Uso do Find',()=> {
      cy.get('#buttonList').click()
      cy.get('#lista li').find('span').should('contain', 'Item 1')
      cy.get('#lista li').find('span').should('contain', 'Item 2')
      

})

})