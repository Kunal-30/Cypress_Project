

describe('Login Page', () => {
    it('Login1', () => {
        cy.visit("https://www.google.com/")
    });
    it('Login', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
// Username 
        cy.get("#username").type("tomsmith");
// Password
        cy.get("#password").type("SuperSecretPassword!");
// Login Button
        cy.get(".radius").click();
    });
   
});