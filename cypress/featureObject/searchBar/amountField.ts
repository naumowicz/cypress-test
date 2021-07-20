import actions from '../../support/actions';

class amoutField {
	button = 'button[data-cy="search-amount-button"]';
	from = 'input[placeholder="Od"]';
	to = 'input[placeholder="Do"]';
	find = '[role] > [type="button"]:nth-of-type(2)'
	
	setAmountRange(range1: string, range2: string) {
		actions.click(this.button);
		actions.type(this.from, range1);
		actions.type(this.to, range2);
		actions.click(this.find);
	}
}

export default new amoutField();