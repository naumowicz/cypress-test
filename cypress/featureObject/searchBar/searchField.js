import actions from '../../support/actions';

class SearchField {
	input = '[data-cy="search-keyword"]';
	searchButton = '[data-cy="search-trigger-button"]'
	
	fill(text) {
		actions.type(this.input, text);
	}

	search() {
		actions.click(this.searchButton)
	}
}

export default new SearchField();