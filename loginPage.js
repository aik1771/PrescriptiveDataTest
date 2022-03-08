class LoginPage{

	elements =
	{
		username: () => cy.get('#user-name'),
		password: () => cy.get('#password'),
		loginButton: () => cy.get('#login-button')
	}

	enterUsername(username)
	{
		this.elements.username.Input().type(username);
	}

	enterPassword(password)
	{
		this.elements.passwordInput().type(password);
	}
}

module.ex