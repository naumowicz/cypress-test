import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import actions from '../../actions'
import {login as loginData} from '../../../testData/login'
import searchField from '../../../featureObject/searchBar/searchField'
import amountField from '../../../featureObject/searchBar/amountField'
import login from '../../../featureObject/login'

Given(/I am logged as a user '(.*)'/, (user) => {
	actions.openURL(loginData.url);
	login.clickLogin();
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