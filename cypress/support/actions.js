class Actions {
	openURL(url) {
		cy.visit(url);
	}

	evaluateSelector(selector) {
		return cy.get(selector);
	}

	click(selector) {
		return this.evaluateSelector(selector).click();
	}

	getText(selector) {
		const element = this.evaluateSelector(selector);
		let receivedText = '';
		element.invoke('text').then((text) => {
			receivedText = text;
		});
		return [element, receivedText];
	}

	type(selector, value) {
		if (typeof value === 'number') {
			value = value.toString();
		}
		return this.evaluateSelector(selector).type(value);
	}
}

export default new Actions();
