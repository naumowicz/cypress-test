import actions from './actions';

class Expect {
	toHaveText(selector: string, text: string) {
		const [/* chainable */, receivedText] = actions.getText(selector)
		expect(receivedText).to.equal(text);
	}
}

export default new Expect();
