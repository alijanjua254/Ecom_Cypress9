import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import pdp from "../../integration/2-advanced-examples/Pages/pdpclass";
import checkout from "../../integration/2-advanced-examples/Pages/checkoutclass";
Then('I accept terms and conditions and click on checkout button',()=>{
    checkout.goToCheckout()

})
Then('I select country as {string} and click continue',(country)=>{
    checkout.enterBillingAddress(country)
})
