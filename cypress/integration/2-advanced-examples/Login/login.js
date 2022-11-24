


describe('login functionality', ()=>{
    it('tc07 go to login page', ()=>{
        cy.visit('https://demowebshop.tricentis.com/')
        cy.get('.ico-login').should('be.visible').click()

    })
    it('tc08 login using creds', ()=>{
        cy.get('#Email').should('be.visible').type('ali@ila.com',{delay:100})
        cy.get('#Password').should('be.visible').type('aliila',)
        cy.get('#RememberMe').click()
        cy.get('form > .buttons > .button-1').should('be.visible').click()
        //assert to check if login successful
        cy.get('.header-links > ul > :nth-child(1) > .account').should('have.text','ali@ila.com')

    })
    it('tc09 logout', ()=> {

        cy.get('.ico-logout').click()
        //assert if logout successful
        cy.get('.ico-login').should('be.visible')
        //assert that previous email is not visible in the header
        cy.get('.header-links > ul > :nth-child(1) > .account').should('not.exist')
    })

})