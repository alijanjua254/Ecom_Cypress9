import pageObjectLogin from "../../../fixtures/page_objects/login.json"
import testDataLogin from "../../../fixtures/test_data/login.json"
import pageObjectDashboard from "../../../fixtures/page_objects/dashboard.json"

class login{
    static PerformLogin(){
        this.VisitLoginPage()
        this.EnterEmail();
        this.EnterPassword();
        this.ClickLoginBtn();

    }
    static EnterEmail(){
        cy.get(pageObjectLogin.field_Email).should('be.visible', pageObjectLogin.field_Email).type(testDataLogin.login_email)

    }
    static EnterPassword(){
        cy.get(pageObjectLogin.field_Password).type( testDataLogin.login_password)

    }
    static ClickLoginBtn(){
        cy.get(pageObjectLogin.login_btn).click()

    }
    static VisitLoginPage(){
        //cy.visit("https://demowebshop.tricentis.com/login")
        cy.get(pageObjectDashboard.btn_login).click()

    }

}
export default login
