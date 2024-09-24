describe('Rahul shetty', () => {
    it('Web Table Examples', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // cy.xpath('//table[@name="courses"]/tbody/tr[10]/td[2]').click();

        cy.xpath('//table[@id="product"]/tbody/tr[10]/td[3]').then(($ele) => {
            cy.log($ele.text());
            var ele2 = $ele.text();
            // cy.log(ele2);
        })
    });
});