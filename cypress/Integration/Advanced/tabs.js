describe('Open Tabs', () => {
    it('tabs1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // For opening the lik in the same tab
        // cy.xpath('//a[@id="opentab"]').invoke('removeAttr', 'target').click();

        cy.xpath('//button[@id="openwindow"]').invoke('removeAttr', 'onclick').click();


        // To work on different origin / link we have to use cy.origin()
        // Then only we can interact with the origin
        
        cy.origin('https://www.qaclickacademy.com/', () => {
            
            // cy.contains('Courses').click();
            // cy.contains('CONTACT').click();
            cy.log(cy.url())
        })
        
    });
});