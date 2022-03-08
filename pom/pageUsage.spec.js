import loginPage from '../loginPage'

describe('POM Implementation',()=> {

	beforeEach(() => {
		cy.visit('https://www.saucedemo.com')

	});

	it('should login to inventory page', () =>
	{

		loginPage.enterUsername('standard_user')
		loginPage.enterPassword('secret_sauce')
		loginPage.loginAction()

	});



	addOnlyTshirts(() => {
		loginPage.addOnlyTshirts()

	});

});