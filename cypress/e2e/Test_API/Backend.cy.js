///<reference types="cypress"/>

describe('Works with a project', () => {
	beforeEach(() => {
		// cy.visit('https://barrigareact.wcaquino.me')
	})

	// it('Insert account', () => {
	// 	cy.request({
	// 		method: 'POST',
	// 		url: 'https://barrigarest.wcaquino.me/signin',
	// 		body: {
	// 			email: 'bruna@teste',
	// 			redirecionar: false,
	// 			senha: 'b@t'
	// 		}
	// 	})
	// 		.its('body.token')
	// 		.should('not.be.empty')
	// 		.then((token) => {
	// 			cy.request({
	// 				url: 'https://barrigarest.wcaquino.me/contas',
	// 				method: 'POST',
	// 				headers: {
	// 					Authorization: `bearer ${token}`,
	// 					'Content-Type': 'application/json'
	// 				},
	// 				body: {
	// 					nome: 'Conta criada por API'
	// 				}
	// 			}).then((res) => console.log(res))
	// 		})
	// })

	it('Insert account', () => {
		cy.request({
			method: 'POST',
			url: 'https://barrigarest.wcaquino.me/signin',
			body: {
				email: 'bruna@teste',
				redirecionar: false,
				senha: 'b@t'
			}
		})
			.its('body.token')
			.should('not.be.empty')
			.then((token) => {
				console.log('Token:', token)
				cy.request({
					url: 'https://barrigarest.wcaquino.me/contas',
					method: 'POST',
					headers: { Authorization: `Bearer ${token}` },
					body: {
						nome: 'Conta criada por API'
					}
				}).then((res) => console.log(res))
			})
	})
})
