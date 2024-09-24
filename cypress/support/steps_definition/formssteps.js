import {before, Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps';

Given('Open the browser and enter simpleform url', () => {
   cy.visit('https://v1.training-support.net/selenium/simple-form');
})

When('user enter firstName, lastName, email, contact', () => {
    cy.get('#firstName').type('Kunal');
    cy.get('#lastName').type('Tagde');
    cy.get('#email').type('kunal.tagde30@gmail.com');
    cy.get('#number').type('7378351383');
})

And('click on submit button', () => {
    cy.get('input[type="submit"]').click();
})

Then('Successful alert should be displayed with message', () => {  
    cy.on('window:alert', (text) => {
        expect(text).to.contains('Thank You for reaching out to us, Kunal Tagde');
    })
})
