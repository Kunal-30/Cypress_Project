/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


// import { it } from "mocha";

// CSS Locaters

describe('Ebay', () => {
    
    // it('Simple Form', () => {
        
    //     cy.visit("https://v1.training-support.net/selenium/simple-form");

    //     // Assert the URl of the website should include selenium

    //     // cy.url().should("include", "support");
    //     // cy.xpath('//input[@id="firstName"]').type("Kunal");
    //     // cy.xpath('//input[@id="lastName"]').type("Tagde");
    //     // cy.xpath('//input[@id="email"]').type("kunal.tagde30@gmail.com");
    //     // cy.xpath('//input[@id="number"]').type("7378351383");
    //     // cy.xpath('//textarea[@rows="2"]').type("yfaadbnsdhsbfbnaahdnaddsfb");
    //     // cy.xpath('//input[@type="submit"]').click();

    // })
    //     it.('Simple Form2', () => {
        
    //     cy.visit("https://v1.training-support.net/selenium/simple-form");
    
    //     // Assert the URL of the website includes "support"
    //     cy.url().should("include", "support");
    
    //     // Assert the title of the website includes "Simple Form"
    //     cy.title().should("include", "Simple Form");
    
    //     // Correct XPath and chain the should method properly
    //     cy.xpath("(//*[contains(text(), 'Simple Form')])[2]").should("be.visible");

    //     cy.get('#firstName').should('have.attr', 'placeholder', 'First Name');

    //     cy.get('#firstName').should('have.id', 'firstName').type('Kunal').should('have.value', 'Kunal');

    //     cy.get('#lastName').should('have.attr', 'placeholder', 'Last Name').type('Tagde').should('have.value', 'Tagde');

       
       
       
    //     // cy.get('#firstName').type('Kunal').should('have.value', 'Kunal');

    //     // cy.get('#lastName').type('Tagde').should('have.value', 'Tagde');

    //     cy.get('#email').type('kunal.tagde30@gmail.com').should('have.value', 'kunal.tagde30@gmail.com');

    //     cy.get('#number').type('7378351383').should('have.value', '7378351383');    
    
    //     cy.get('textarea').type('yfaadbnsdhsbfbnaahdnaddsfb').should('have.value', 'yfaadbnsdhsbfbnaahdnaddsfb');

    //     cy.get('input[type="submit"]').click();
    
    // });

    it('Automation Store', () => {
        cy.visit("https://automationteststore.com/");

        cy.url().should("include", "automationteststore");

        cy.title().should("include", "practice your automation skills");  
        
        cy.xpath('(//a[@href="https://automationteststore.com/index.php?rt=content/contact"])[1]').click();

        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type("Kunal");

        cy.xpath('//input[@id="ContactUsFrm_email"]').type("kunal.tagde30@gmail.com");

        cy.xpath('(//textarea[@id="ContactUsFrm_enquiry"])').type("bzkbkfshdkgjszfkhskdgkkgdfh");

        cy.xpath('//button[@title="Submit"]').click();

        cy.url().should("include", "contact");

        cy.xpath('(//section[@class="mb40"]//p)[2]').should("have.text", "Your enquiry has been successfully sent to the store owner!");
    });
});