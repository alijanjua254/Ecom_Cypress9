
let global_email = "email" + Math.floor(Math.random()*1000 )+ "@gmail.com";


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
    it('tc05 Click register with incorrect password confirmation', ()=>{
        cy.get('#FirstName').type('Ila', {delay : 100})
        cy.get('#LastName').type('Ila', {delay : 100})
        cy.get('#Email').type(global_email)
        cy.get('#Password').type('aliila')
        cy.get('#ConfirmPassword').type('aliil',{delay : 100})
        cy.get('#register-button').click()
        //assert incorrect confirm password validation
        cy.get('.field-validation-error > span').should('be.visible').should('have.text', 'The password and confirmation password do not match.')
    })
    it('tc06 Click register after entering data', ()=> {
        cy.get('#FirstName').clear().type('Ila', {delay: 100})
        cy.get('#LastName').clear().type('Ila', {delay: 100})
        cy.get('#Email').clear().type('aliila@gmail.com')
        cy.get('#Password').clear().type('aliila')
        cy.get('#ConfirmPassword').clear().type('aliila', {delay: 100})
        cy.get('#register-button').click()
        cy.go('back')
        // This website behaves differently when automated through cypress and when you use it manually
        // getting error page when I try to register the first time but for some reason it works fine when
        // I do it the second time, so I'm doing a new registration again
        cy.get('#FirstName').clear().type('Ila', {delay: 100})
        cy.get('#LastName').clear().type('Ila', {delay: 100})
        cy.get('#Email').clear().type(global_email)
        cy.get('#Password').clear().type('aliila')
        cy.get('#ConfirmPassword').clear().type('aliila', {delay: 100})
        cy.get('#register-button').click()
        //assert registration successful after entering correct data for registration
        cy.get('.result').should('contain', 'Your registration completed')
    })

        it('tc07 Click continue button after successful registration', ()=> {
            cy.get('.page-body > .buttons > .button-1').click()
            //assert if the registered email is visible in the header

            //cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text', global_email)
        })



})