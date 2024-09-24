/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('OrangeHRM Assignment', () => {
    it('Login and verify the tasks', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').type('Admin');

        cy.get('[type="password"]').type('admin123');
        
        cy.get("button[type='submit']").click();

        cy.wait(2000);

        cy.xpath('//a[@href="/web/index.php/dashboard/index"]').click();

        cy.url().should('include', 'dashboard');

        // cy.contains('Welcome, John').should('be.visible');

        // cy.get('.oxd-userdropdown').select('Logout').should('have.value', 'Logout');
        cy.wait(2000);
        cy.get('//ul[@class="oxd-dropdown-menu"]').select('Logout').should('have.value', 'Logout');

        // cy.get('button').contains('Logout').should('be.visible');
    
        // Assert a list of recent activities is loaded and contains at least 3 items
        // cy.get('.recent-activities').find('li').should('have.length.gte', 3);
    });
});