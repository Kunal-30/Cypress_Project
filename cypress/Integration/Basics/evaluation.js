describe('Orange HRM', () => {
    it('Login Automate', () => {

        //Asserting the URL of the Website
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // Asserting username 
        cy.xpath("//input[@name='username']").type("Admin");

        // Asserting Password
        cy.xpath('//input[@name="password"]').type("admin123");

        //Asserting the click button
        cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

        //Asserting the admin tab
        cy.xpath('//a[@href="/web/index.php/admin/viewAdminModule"]').click();

        //Asserting the selection of User Managment
        cy.xpath('(//span[@class="oxd-topbar-body-nav-tab-item"])[1]').click();

        //Asserting the selection of admin from the dropdown
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[1]').click();

        //Asserting the Admin and choosing it from the dropdown
        cy.xpath('(//div[@class="oxd-select-text-input"])[1]').click().type("Admin{enter}");

        //Asserting the employee name in the eemployee search
        cy.xpath('//input[@placeholder="Type for hints..."]').type("Jos oi Butler");

        // Asserting the search click button 
        cy.xpath('(//div[@class="oxd-select-text oxd-select-text--active"])[2]').click();

        // To select the enabled option from the dropdown menu
        cy.xpath('(//div[@class="oxd-select-text-input"])[2]').click().type("Enabled{enter}");
        
        // Clicking on Search Button
        cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click({force : true});
    
        // Click onn Logout
        cy.xpath('//span[@class="oxd-userdropdown-tab"]').click()
        cy.xpath('(//a[@class="oxd-userdropdown-link"])[4]').click();
    });
});