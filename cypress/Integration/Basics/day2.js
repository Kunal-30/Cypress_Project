// describe('Login Page', () => {
//         it('Login', () => {
//             cy.visit("https://the-internet.herokuapp.com/login");
//     // Username 
//             cy.get("#username").type("tomsmith");
//     // Password
//             cy.get("#password").type("SuperSecretPassword!");
//     // Login Button
//             cy.get(".radius").click();
//         });
       
//     });

// describe('Orange Suite', () => {
        // it('Login Test', () => {
        //         //  Website
                // cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

                // // Username
                // cy.get('[name="username"]').type('Admin');

                // // Password
                // cy.get('[type="password"]').type('admin123');

                // // Login Button
                // cy.get("button[type='submit']").click();

        // });
// });

describe('Facebook', () => {
        it('Login Page', () => {
                cy.visit("https://www.facebook.com/");
                cy.get('[name="email"]').type("kunaltagde007@gmail.com");
                cy.get('[type="password"]').type("Demo123");
                cy.get('[data-testid="royal_login_button"]').click();             
        });
});