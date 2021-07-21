import actions from '../../support/actions';

class SearchField {
	input = '[data-cy="search-keyword"]';
	
	fill(text) {
		actions.type(this.input, text);
	}
}

export default new SearchField();