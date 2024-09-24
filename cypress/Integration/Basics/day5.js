/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

// Assertion using Expect Keyword
describe('Expect Command', () => {
    it('Assertinng the expect command', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').then(($uname) => {
            expect($uname).to.have.attr('name', 'username').to.have.attr("placeholder");
            cy.wrap($uname).type('Admin')
        });
        cy.get('[name="password"]').then(($pass) => {
            expect($pass).to.have.attr('placeholder', 'Password');
            cy.wrap($pass).type('admin123');
        });

        cy.get('[type="submit"]').then(($login) => {
            expect($login).to.have.text(' Login ');
            cy.wrap($login).click();
        });

        cy.wait(2000);
        
        cy.get('[class="oxd-dropdown-menu"]').then(($user) => 
            { expect($user).to.have.attr('role="menuitem"')
                cy.wrap($login).click()
            });


        cy.get('.oxd-dropdown-menu').find('[role="menuitem"]').each(($ele) => {
            if($ele.text()=='Logout'){
                cy.wrap($ele).click();
            }
        })
    });

    it.only('Rahul Shetty Tests', () => {

        // To visit the website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // to check weather the website contains the text or not
        cy.url().should('include', 'AutomationPractice');

        // To check the checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked');
        cy.get('#checkBoxOption2').check().should('be.checked');
        cy.get('#checkBoxOption3').check().should('be.checked');

        // To uncheck the checkboxes
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked');
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked');

        // to check for hide and show textbox

    cy.get('[placeholder="Hide/Show Example"]').should('be.visible');

    cy.get('#hide-textbox').click();

    cy.get('[placeholder="Hide/Show Example"]').should('not.be.visible');

    cy.get('#show-textbox').click();

    cy.get('#displayed-text').should('be.visible').type('Should Be Visible');
    })
});
