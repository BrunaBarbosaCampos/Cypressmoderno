/// < reference types="cypress" />

describe('Dinamics', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.reload()
    })
    
    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    

    foods.forEach(food => {
    it(`Selecionando a comida ${food}`, () => {
        cy.contains(`${food}`).click()
    })
})

})