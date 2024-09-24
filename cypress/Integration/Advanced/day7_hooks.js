/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// const { before } = require("mocha");

// const { before } = require("mocha");

describe('OrangeHRM Website', () => {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

                // Username
                cy.get('[name="username"]').type('Admin');

                // Password
                cy.get('[type="password"]').type('admin123');

                // Login Button
                cy.get("button[type='submit']").click();
    });


    it('Admin Test', () => {
        cy.xpath('//a[@href="/web/index.php/admin/viewAdminModule"]').click();

        cy.url().should('include','admin')

    });

    it('Leave Test', () => {
        cy.contains('Leave').click();

        cy.url().should('include','leave')

    });

    // Logout Operation - post condition for all testscases - it block
    afterEach(() => {

        cy.wait(2000);
        cy.get('.oxd-userdropdown-name').click();

        // cy.xpath('//a[.="Logout"]').click();

        cy.contains('Logout').click();

    });
});