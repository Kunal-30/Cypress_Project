/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// const { it } = require("mocha");

// const { describe } = require("mocha");

describe('Rohit Shetty', () => {
    it('Navigating Command', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.contains('Free Access to InterviewQues/ResumeAssistance/Material').click();

        cy.xpath('(//a[@href="learning-path"])[1]').click();

        cy.wait(2000);

        cy.go('back');

        cy.go('forward');

        cy.reload();
        
    });
    it.only('Alert', () => {
        var name = "Kunal";
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#name').type(name);

        cy.get('#alertbtn').click();

        cy.on('window:alert', (alert_box) => {
            expect(alert_box).to.contains(name);
        })

        cy.get('#confirmbtn').click();

        cy.on('window:confirm', (confirm_box) => {
            expect(confirm_box).to.contains('Hello , Are you sure you want to confirm?');

        })
    })
});