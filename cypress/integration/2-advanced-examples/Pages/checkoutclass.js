import pageObjectCart from "../../../fixtures/page_objects/cart.json"
import pageObjectCheckout from "../../../fixtures/page_objects/checkout.json"
import testDataCheckout from "../../../fixtures/test_data/checkout.json"

class checkout{
    static goToCheckout(){
        cy.get(pageObjectCart.checkbtn_terms).click()
        cy.get(pageObjectCart.btn_checkout).click()
    }
    static enterBillingAddress(){
        cy.get(pageObjectCheckout.country_drpdn).select(testDataCheckout.country_value)
        cy.get(pageObjectCheckout.btn_continueBillingAddress).click()
    }


}
export default checkout