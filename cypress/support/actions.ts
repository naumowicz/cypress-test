class Actions {
	openURL(url: string) {
		cy.visit(url);
	}

	evaluateSelector(selector: string) {
		return cy.get(selector);
	}

	click(selector: string) {
		return this.evaluateSelector(selector).click();
	}

	getText(selector: string) {
		const element = this.evaluateSelector(selector);
		let receivedText = '';
		element.invoke('text').then((text) => {
			receivedText = text;
		});
		return [element, receivedText];
	}

	type(selector: string, value: string | number) {
		if (typeof value === 'number') {
			value = value.toString();
		}
		return this.evaluateSelector(selector).type(value);
	}
}

export default new Actions();
