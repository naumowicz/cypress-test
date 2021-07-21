import actions from '../support/actions';
import myExpect from '../support/expect';

class TransactionsList {
	transactionlist = '[data-cy="transaction-list"]';
	header = 'h2';
	transactionListItem = ['[data-cy="transaction-list-item-', '"]'];
	time = 'time';
	title = '[data-cy="transaction-title"]';
	category = '.badge.g-badge-category';
	paymentType = 'td:nth-of-type(3) p';
	amount = 'td:nth-of-type(4) .g-amount-superscript';
	euro = 'td:nth-of-type(4) .g-amount-camouflage';

	// verifyList(data) {
	// 	data.forEach(list => {
	// 		cy.get(this.transactionlist).each(($el, index, $list) => {
	// 			let headerText =''
	// 			cy.wrap($el).find(this.header).invoke('text').then(text => {
	// 				headerText = text;
	// 			})
	// 			expect(headerText).to.eqal(list.header);

	// 		})
	// 		// expect.toHaveText(`${this.transactionlist} ${this.header}`, list.header);
	// 		list.transactions.forEach(transaction => {
	// 			const transactionListItemSelector = this.transactionListItem[0] + transaction.id + this.transactionListItem[1]
	// 			const [time, title, category, paymentType, amount, euro] = transaction;
	// 			//time
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.time}`, time)
	// 			//title
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.title}`, title)
	// 			//category
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.category}`, category)
	// 			//paymentType
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.paymentType}`, paymentType)
	// 			// amount
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.amount}`, amount)
	// 			//euro
	// 			expect.toHaveText(`${transactionListItemSelector} ${this.euro}`, euro)

	// 		})
	// 	});
	// }

	//TODO: how to use each loops in cypress
	verifyList(data) {
		// data = Array.from(data)
		// cy.debug(data)
		// console.log(data)
		// cy.pause()
		cy.wrap(data).each(($el, $index, $list) => {
			//verify headers with date
			// cy.get(this.transactionlist).each(($el) => {
			// 	let headerText = '';
			// 	cy.wrap($el)
			// 		.find(this.header)
			// 		.invoke('text')
			// 		.then((text) => {
			// 			headerText = text;
			// 		});
			// 	expect(headerText).to.equal($list[$index].header);
			// });

			cy.wrap($el.transactions).each(($el, $index, $list) => {
				const transaction = $el;
				const transactionListItemSelector =
					this.transactionListItem[0] + transaction.id + this.transactionListItem[1];
				const {time, title, category, paymentType, amount, euro} = transaction;
				//time
				cy.get(`${transactionListItemSelector} ${this.time}`).should('contain', time)
				// myExpect.toHaveText(`${transactionListItemSelector} ${this.time}`, time);
				//title
				//TODO: not able to check it properly
				//Liftago.com Usti nad Labe CZ
				// cy.get(`${transactionListItemSelector} ${this.title}`).invoke('text').then(text=> {
					// console.log('To ja!')
					// console.log(text)
				// })
				// cy.get(`${transactionListItemSelector} ${this.title}`).should('contain', title)
				// myExpect.toHaveText(`${transactionListItemSelector} ${this.title}`, title);
				//category
				cy.get(`${transactionListItemSelector} ${this.category}`).should('contain', category)

				// myExpect.toHaveText(`${transactionListItemSelector} ${this.category}`, category);
				//paymentType
				cy.get(`${transactionListItemSelector} ${this.paymentType}`).should('contain', paymentType)

				// myExpect.toHaveText(`${transactionListItemSelector} ${this.paymentType}`, paymentType);
				// amount
				cy.get(`${transactionListItemSelector} ${this.amount}`).should('contain', amount)

				// myExpect.toHaveText(`${transactionListItemSelector} ${this.amount}`, amount);
				//euro
				cy.get(`${transactionListItemSelector} ${this.euro}`).should('contain', euro)

				// myExpect.toHaveText(`${transactionListItemSelector} ${this.euro}`, euro);
			});
		});
	}
}

export default new TransactionsList();
