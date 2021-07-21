import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import actions from '../../actions'
import {login as loginData} from '../../../testData/login'
import searchField from '../../../featureObject/searchBar/searchField'
import amountField from '../../../featureObject/searchBar/amountField'
import login from '../../../featureObject/login'
import transactionsDataList from '../../../testData/transactionsDataList';
import transactionsList from '../../../featureObject/transactionsList'

Given(/I am logged as a user '(.*)'/, (user) => {
	actions.openURL(loginData.url);
	//TODO: fix
	cy.wait(1500);
	login.login(loginData.login, loginData.pass);
	actions.waitForDisplayed('[alt="George Logo"]', 20000)
})

When(/I search for '(.*)'/, (textToSearch) => {
	searchField.fill(textToSearch);
})
When(/I set money amount to '(.*)' - '(.*)'/, (range1, range2) => {
	amountField.setAmountRange(range1, range2);
})

Then(/I should receive list of transactions in range '(.*)'/, (range) => {
	const [range1, range2] = range.split(' - ');
})
Then(/I should receive list of transactions related to '(.*)'/, (transactions) => {
	searchField.search();
	const {list} = transactionsDataList[transactions]
	transactionsList.verifyList(list)
})