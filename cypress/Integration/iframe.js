describe('Rahul Shetty', () => {
    it('iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.iframe('#courses-iframe').contains('Learning paths').click();
    });
});