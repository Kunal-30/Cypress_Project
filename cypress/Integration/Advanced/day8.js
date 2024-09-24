/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Rohit Shetty', () => {
    
    it('Windows Alert', () => {
        // var name = "Kunal";
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        // confirmation button handling

        cy.get('#confirmbtn').click();

        cy.on('window:confirm', (alert) => {
            expect(alert).to.contains('Hello , Are you sure you want to confirm?');

            return true;
        });
    })
    it('Mouse test', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html');
        cy.xpath('//*[contains(text(), "right")]').rightclick();
        cy.wait(2000);
        cy.xpath('//span[contains(text(), "Quit")]').rightclick();
        cy.wait(2000);
        cy.xpath('//button[@ondblclick="myFunction()"]').dblclick();
        
    });

    it('Rahul Shetty Website Mouse Hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //First Approach
        cy.get('#mousehover').invoke('show')
        cy.contains('Top').click({force: true});
        // cy.get('#mousehover').invoke('hide');
        cy.url().should('include', 'top');

        //Second Approach

        cy.get('#mousehover').trigger('mouseover');
        cy.contains('Reload').click({force: true});
        cy.url().should('include', 'AutomationPractice');
    })


    it.only('V1 Website', () => {
        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        // {which : 1} --> If I want to work with the left mouse button
        // {which : 2} --> If I want to work with the middle mouse button
        // {which : 3} --> If I want to work with the right mouse button

        //We are telling cypress to move the mouse from  1 point to the mentioned locator box

        cy.get('#draggable').trigger('mousedown', {which: 1});

        cy.wait(2000)
        //instructing cypress to releaase the button forcefully
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
        cy.wait(2000)
        cy.get('#draggable').trigger('mousedown', {which: 1});  

        cy.wait(2000)
 
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup', {force: true});
    });
});