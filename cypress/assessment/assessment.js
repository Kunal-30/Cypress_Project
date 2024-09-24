///< reference types = "cypress"/ >
/// <reference types = "cypress-xpath"/ >

describe('Automation Test Store', () => {
    it('Assessment Tasks', () => {
        cy.visit('https://automationteststore.com/');

        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click();

        cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click();

        cy.get('#option350').select('Light Blue  (996323 In Stock)').should('have.value', '774');

        // cy.xpath('(//option[@selected="selected"])[3]').select('Medium  ').should('have.value', '777');

        cy.get('#product_quantity').type('0');
        
        cy.xpath('//a[@class="cart"]').click();

        cy.get('#cart_checkout1').click();

        cy.get('#accountFrm_accountguest').click().should('be.checked');

        cy.xpath('//button[@title="Continue"]').click();

        cy.get('#guestFrm_firstname').type('Kunal');

        cy.get('#guestFrm_lastname').type('Tagde');

        cy.get('#guestFrm_email').type('tagdekunal2000@gmail.com');

        cy.get('#guestFrm_telephone').type('7378351383');

        cy.get('#guestFrm_address_1').type('Plot No 11 Satnam Layout IUDP Katol');

        cy.get('#guestFrm_city').type('Nagpur');
        
        cy.get('#guestFrm_country_id').select('India').should('have.value', '99');
        cy.get('#guestFrm_zone_id').select('Maharashtra').should('have.value', '1493');
        
        cy.get('#guestFrm_postcode').type('441302');
        

        // cy.get('//input[@type="checkbox"]').click();

        cy.xpath('//button[@title="Continue"]').click();

        cy.xpath('//button[@title="Confirm Order"]').click();

        // cy.xpath('//span[@class="maintext"]').should('include', ' Your Order Has Been Processed!')

    });
});