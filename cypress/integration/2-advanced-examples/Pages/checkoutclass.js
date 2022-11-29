import pageObjectCart from "../../../fixtures/page_objects/cart.json"
import pageObjectCheckout from "../../../fixtures/page_objects/checkout.json"
import testDataCheckout from "../../../fixtures/test_data/checkout.json"

class checkout{
    static completeCheckout(){
        this.goToCheckout()
        this.enterBillingAddress()
    }
    static goToCheckout(){
        cy.get(pageObjectCart.checkbtn_terms).click()
        cy.get(pageObjectCart.btn_checkout).click()
    }
    static enterBillingAddress(country){
        cy.get(pageObjectCheckout.country_drpdn).select(country)
        cy.get(pageObjectCheckout.btn_continueBillingAddress).click()
    }


}
export default checkout