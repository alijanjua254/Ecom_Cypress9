import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import login from "../../integration/2-advanced-examples/Pages/loginclass";
import dashboard from "../../integration/2-advanced-examples/Pages/dashboardclass";
Then('I click on login link', ()=>{
    login.VisitLoginPage()
})
Then('I enter valid credentials', ()=>{
    login.EnterEmail()
    login.EnterPassword()
})
Then('I click on login button',()=>{
    login.ClickLoginBtn()
})
Then('I should be logged into application',()=>{
    dashboard.verifyLogin()
})