/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Ebay Assessment', () => {
    it('Tasks', () => {

        // Using this we will visit the website of ebay
        cy.visit('https://www.ebay.com/');

        // Using this we are clicking on the option of Advanced Search beside the search option in blue color 
        cy.xpath('//a[@href="https://www.ebay.com/sch/ebayadvsearch"]').click();

        // Using this we are chossing the option of Clothing, Shoes & Accessories
        cy.xpath('//select[@id = "s0-1-17-4[0]-7[3]-_sacat"]').select('Clothing, Shoes & Accessories').should('have.value', '11450')

        // Using this we are clicking on the option of ' using advanced search options' and removeAttr will helpremove the target attribute which will help us to open tab in same window
        // cy.xpath('//a[@href="/help/buying/search-tips/advanced-search?id=4049"]').invoke('removeAttr', 'target').click();

        // cy.origin('https://www.ebay.com/help/buying/search-tips/advanced-search?id=4049')

        // Here we are checking the option of 'Customer Service'
        // cy.xpath('//td[@id="gh-title"]').contains('Customer Service').should('be.visible')

        // Here we are typing the keyword 'Laptop'
        cy.xpath('//input[@id="_nkw"]').type('Laptop');

        // Here from dropdown we are selection the option 'Exact words, any order'
        cy.xpath('//select[@aria-label="Keyword options"]').select('Exact words, any order').should('have.value', '4')

        // Here from dropdown we are selecting the option of 'Coins & Paper Money'
        cy.xpath('//select[@aria-label="In this category"]').select('Coins & Paper Money').should('have.value', '11116')

        // Here we are clicking on the search button
        cy.xpath('(//button[@_sp="p4433449.m150127.l158973"])[1]').click();

        // Here we are checking the option of 'No exact matches found'
        cy.xpath('//h3[@class="srp-save-null-search__heading"]').contains('No exact matches found').should('be.visible')
    });
});