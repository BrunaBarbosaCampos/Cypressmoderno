///<reference types="cypress"/>

import Cred from '../../../config/credenciais.json'

describe('Works with a project', () => {
	beforeEach(() => {
		// cy.visit('https://barrigareact.wcaquino.me')
	})

	it('Insert account', () => {
		cy.request({
			method: 'POST',
			url: 'https://barrigarest.wcaquino.me/signin',
			body: {
				email: Cred.email,
				redirecionar: false,
				senha: Cred.password
			}
		})
			.its('body.token')
			.should('not.be.empty')
			.then((token) => {
				cy.request({
					url: 'https://barrigarest.wcaquino.me/contas',
					method: 'POST',
					headers: { Authorization: `JWT ${token}` },
					body: {
						nome: 'Conta criada por API'
					}
				}).then((response) => {
					expect(response.status).to.eq(201)
					expect(response.body).to.have.property('id')
					expect(response.body).to.have.property('nome', 'Conta criada por API')
				})
			})
	})
})
