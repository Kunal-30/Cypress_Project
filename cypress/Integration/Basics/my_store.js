/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Scrape Book', () => {
    it('Page Title', () => {
        cy.visit("https://books.toscrape.com/index.html");
       
        cy.title().should("include", "My store");

        
    });

    it('Non Fiction Link', () => {
        cy.visit("https://books.toscrape.com/index.html");
       
        cy.title().should("include", "products");

        cy.xpath('//a[@href="catalogue/category/books/nonfiction_13/index.html"]').click();

        cy.xpath('//li[@class="active"]').should("be.visible", "Nonfiction");
    });

    it('Add to Cart', () => {
        cy.visit("https://books.toscrape.com/index.html");
       
        cy.title().should("include", "products");

        cy.xpath('//a[@href="catalogue/category/books/nonfiction_13/index.html"]').click();

        cy.xpath('//li[@class="active"]').should("be.visible", "Nonfiction");

        cy.xpath('(//button[@class="btn btn-primary btn-block"])[2]').click();
    });


})