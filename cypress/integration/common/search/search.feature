@search-bar
Feature: Search feature

	Testing the ability to search desired transactions.

	Background:
		Given I am logged as a user ''

	@searching-money-amount
	Scenario Outline: Testing ability to find transactions with given money amount
		When I search for 'liftago'
		And I set money amount to '<range1>' - '<range2>'
		Then I should receive list of transactions in range '1 - 200'

		Examples:
			| range1 | range2 |
			| 1      | 200    |
			| 200    | 200    |
			| 200    | 1      |
