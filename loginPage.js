class LoginPage{

	elements =
	{
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button')
		addOnlyTshirts: () => cy.get('*[id^="t-shirt"]');
	}

	enterUsername(username)
	{
		this.elements.username.Input().type(username);
	}

	enterPassword(password)
	{
		this.elements.passwordInput().type(password);
	}

	loginAction()
	{
		this.elements.loginButton().click();
	}

	addTocart()
	{
		this.elements.addOnlyTshirts().click()
	}
}

