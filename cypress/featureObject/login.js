import actions from '../support/actions';

class Login {
	loginButton = 'app-button';

	clickLogin() {
		actions.click(this.loginButton);
	}
}

export default new Login();
