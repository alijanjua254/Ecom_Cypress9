import pageObjectDashboard from "../../../fixtures/page_objects/dashboard.json"
import testDataLogin from "../../../fixtures/test_data/login.json"
class dashboard{
    static visitHomepage(){
        cy.visit("https://demowebshop.tricentis.com/")
        cy.url().should('be.eq', "https://demowebshop.tricentis.com/")
    }
    static verifyLogin(){
        cy.get(pageObjectDashboard.signedInEmail).should('contain',testDataLogin.login_email)

    }
}
export default dashboard