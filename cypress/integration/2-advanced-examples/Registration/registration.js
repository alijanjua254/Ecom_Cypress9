



describe('registration functionality', ()=>{
    it('tc03 Verify user is able to access register page', ()=>{
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-register').click()
        cy.get('h1').should('be.visible')

    })
    it('tc04 Check all the radio buttons', ()=>{
        cy.get('#gender-male').click()
        cy.get('#gender-male').should('be.checked')
    })
    it('tc05 Click register without entering data', ()=>{
        cy.get('#FirstName').type('Ali')
        cy.get('#register-button').click()
        cy.get(':nth-child(4) > .field-validation-error > span').should('be.visible') || cy.get(':nth-child(2) > .form-fields > :nth-child(2) > .field-validation-error > span').should('be.visible')
    })
    it('tc05 Click register after entering data', ()=>{
        cy.get('#LastName').type('Ila', {delay : 100})
        cy.get('#Email').type('ali@ila.com')
        cy.get('#Password').type('aliila')
        cy.get('#ConfirmPassword').type('aliila',{delay : 100})
        cy.get('#register-button').click()
        //asert
        cy.get('.result').should('contains','Your registration completed')

    })

})