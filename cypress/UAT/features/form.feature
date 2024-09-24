Feature: Simple Form
Scenario: To verify that form is worling for all mandatory fields
Given Open the browser and enter simpleform url
When user enter firstName, lastName, email, contact
And click on submit button
Then Successful alert should be displayed with message
