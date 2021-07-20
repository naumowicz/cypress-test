import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import actions from '../../../support/actions'
import {login as loginData} from '../../../testData/login'
import searchField from '../../featureObject/searchBar/searchField'
import amountField from '../../featureObject/searchBar/amountField'
import login from '../../featureObject/login'

Given(/I am logged as a user '(.*)'/, (user: string) => {
	actions.openURL(loginData.url);
	login.clickLogin();
})

When(/I search for '(.*)'/, (textToSearch: string) => {
	searchField.fill(textToSearch);
})
When(/I set money amount to '(.*)' - '(.*)'/, (range1: string, range2: string) => {
	amountField.setAmountRange(range1, range2);
})

Then(/I should receive list of transactions in range '(.*)'/, (range: string) => {
	const [range1, range2] = range.split(' - ');
})