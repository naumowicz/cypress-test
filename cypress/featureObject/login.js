import actions from '../support/actions';

class Login {
	loginButton = 'app-button';
	loginInput = 'input:nth-of-type(1)';
	inputPass = '[type="password"]';

	login(login, pass) {
		actions.type(this.loginInput, login)
		actions.click(this.loginButton);
		actions.type(this.inputPass, pass)
		actions.click(this.loginButton);

	}
}

export default new Login();
