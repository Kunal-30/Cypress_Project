/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import { it } from "mocha";

// CSS Locaters

describe('Ebay', () => {
    it('Search', () => {
        cy.visit("https://www.ebay.com/")

        cy.get('input[type="submit"]').click();
        cy.get("#gh-btn");
        cy.get('input[value="Search"]');
        cy.get('')
    });
    it('Search', () => {
        
    })
});