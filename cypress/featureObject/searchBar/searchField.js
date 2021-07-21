import actions from '../../support/actions';

class SearchField {
	input = 'input#dropdown-nJBn-menu';
	
	fill(text) {
		actions.type(this.input, text);
	}
}

export default new SearchField();