///< reference types = "cypress"/>


describe('Realizar login', () => {
    beforeEach(()=>{
        cy.visit('https://barrigareact.wcaquino.me')
    })

    it('Logar', () => {
        cy.get('[data-test="email"]').type('bruna@teste')
        cy.get('[data-test="passwd"]').type('b@t')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Bem vindo, brunateste!')
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/reset"]').click()
        cy.wait(2000)
    
    })

    it('Logar com conta errada', () => {
        cy.get('[data-test="email"]').type('bruna@teste1')
        cy.get('[data-test="passwd"]').type('b@t1')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Erro: Error: Request failed with status code 400')
    })


    it('Inserir conta', () => {
        cy.get('[data-test="email"]').type('bruna@teste')
        cy.get('[data-test="passwd"]').type('b@t')
        cy.get('.btn').click()
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        cy.get('[data-test="nome"]').type('Conta teste')
        cy.get('.btn').click()
        cy.wait(3000)

    })

    it('Alterar conta', () => {
        cy.get('[data-test="email"]').type('bruna@teste')
        cy.get('[data-test="passwd"]').type('b@t')
        cy.get('.btn').click()
        cy.get('[data-test="menu-settings"] > .fas').click()
        cy.get('[href="/contas"]').click()
        // cy.xpath("//table//td[contains(.,'Conta teste')]/..//i[@class='far fa-edit']").click()
        cy.get('.table td').should('contain', 'Conta teste')
        cy.get('tbody td').contains('Conta teste').parent().find('[class="far fa-edit"]').click()
        cy.get('[data-test="nome"]').clear()
        cy.get('[data-test="nome"]').type('Conta teste editada')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso!')

})


it('Inserir conta repetida', () => {
    cy.get('[data-test="email"]').type('bruna@teste')
    cy.get('[data-test="passwd"]').type('b@t')
    cy.get('.btn').click()
    cy.get('[data-test="menu-settings"] > .fas').click()
    cy.get('[href="/contas"]').click()
    cy.get('[data-test="nome"]').type('Conta teste editada')
    cy.get('.btn').click()
    cy.get('.toast-message').should('contain', 'Erro: Error: Request failed with status code 400')


})


it('Realizar movimentação', () => {
    cy.get('[data-test="email"]').type('bruna@teste')
    cy.get('[data-test="passwd"]').type('b@t')
    cy.get('.btn').click()
    cy.get('[class="fas fa-hand-holding-usd"]').click()
    cy.get('[data-test="data-transacao"]').type('2024-07-30')
    cy.get('[data-test="data-pagamento"]').type('2024-08-01')
    cy.get('[data-test="descricao"]').type('Pagamento da conta de luz')
    cy.get('[data-test="valor"]').type('1000')
    cy.get('[data-test="envolvido"]').type('Conta de luz')
    cy.get('[data-test="conta"]').select('Conta teste editada')
    cy.get('[data-test="status"]').click()
    cy.get('.btn-primary').click()
    cy.get('.list-group span').should('contain', 'Pagamento da conta de luz')
})


it('Realiza calculo de saldo', () => {
    cy.get('[data-test="email"]').type('bruna@teste')
    cy.get('[data-test="passwd"]').type('b@t')
    cy.get('.btn').click()
    cy.get('[class="fas fa-home"]').click()
    cy.wait(2000)
    cy.get('tbody tr td b').should('have.text', 'Total')
    .parent()
    .next().should('contain', '1.686,00')
    
})



it('Remover movimentação', () => {
    cy.clock()
    cy.get('[data-test="email"]').type('bruna@teste')
    cy.get('[data-test="passwd"]').type('b@t')
    cy.get('.btn').click()
    cy.wait(2000)
    cy.get('[class="fas fa-history"]').click()
    cy.get('span').contains('Pagamento da conta de luz')
    .parent()
    .parent()
    .next().find('[class="far fa-trash-alt"]').click()
    cy.get('.toast-success').should('contain', 'Movimentação removida com sucesso!')
    cy.tick(2000)
    
})

})