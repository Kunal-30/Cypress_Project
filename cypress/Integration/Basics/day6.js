/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// const { it } = require("mocha");

describe('Rahul Shetty Tests', () => {
    it('Radio Button', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('[value="radio1"]').check().should('be.checked');
        cy.get('[value="radio2"]').should('not.be.checked').click().should('be.checked');
        cy.get('[value="radio3"]').click().should('be.checked');
    });

    it('Dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Handling the dropdown
        // //Using value attribute
        // cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('').should('have.value', '');

        // //Using text attribute
        // cy.get('#dropdown-class-example').select('Option3').should('have.value', 'option3');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('Option1').should('have.value', 'option1');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('Option2').should('have.value', 'option2');
        // cy.wait(2000);
        // cy.get('#dropdown-class-example').select('Select').should('have.value', '');

        //Using index
        cy.get('#dropdown-class-example').select(3).should('have.value', 'option3');
        cy.wait(2000);
        cy.get('#dropdown-class-example').select(1).should('have.value', 'option1');
        cy.wait(2000);
        cy.get('#dropdown-class-example').select(2).should('have.value', 'option2');
        cy.wait(2000);
        cy.get('#dropdown-class-example').select(0).should('have.value', '');

    });

    it.only('dynamic dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // With using find and click

        // cy.get('[placeholder="Type to Select Countries"]').type('ind')

        // cy.get('#ui-id-1').find('.ui-menu-item').each(($ele)=>{
        //     if($ele.text() == 'India'){
        //         cy.wrap($ele).click();
        //     }
        // })

        //Without using find and click  

        cy.get('[placeholder="Type to Select Countries"]').type('aus')

        cy.get('.ui-menu-item').each(($ele)=>{
            if($ele.text() == 'Australia'){
                cy.wrap($ele).click({force: true});
            }
        })

        // to clear and click 

        cy.get('[placeholder="Type to Select Countries"]').clear().type('ja');
        cy.get('.ui-menu-item').contains('Japan').click();

    });
});

