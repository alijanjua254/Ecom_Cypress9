



describe('dashboard functionality', ()=>{
    it('tc01 Verify user is able to access application', () => {
        //Verify user is able to access application
        cy.visit('https://demowebshop.tricentis.com/')
        //asserts
    cy.url().should('equals','https://demowebshop.tricentis.com/')
    })
    it('tc02 Verify for the neccessary items on the homepage (example: register, login, add to cart etc)', () => {
        cy.get('.ico-register').should('be.visible')

    })
    
    
    
})