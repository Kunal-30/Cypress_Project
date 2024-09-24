const { before } = require("mocha");

describe('Login using Data Driven', () => {
    
    
    before(() => {
    
        cy.fixture('example').then((data) => {
            globalThis.data = data;                
        })
    
    });


    it('test1', () => {
        

    
        }); 
});