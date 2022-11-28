import pageObjectDashboard from "../../../fixtures/page_objects/dashboard.json"
import pageObjectPLP from "../../../fixtures/page_objects/plp.json"
import pageObjectPDP from "../../../fixtures/page_objects/pdp.json"

class pdp {
    static AddProductToCart(){
        this.OpenCategory("Books")
        this.selectProductFromPLP()
        this.enterQuantity(4)
        this.AddToCartFromPDP()
    }
    static OpenCategory(category) {
        if (category == "Books") {
            cy.get(pageObjectDashboard.category_books).click()
            cy.url().should('be.eq', "https://demowebshop.tricentis.com/books")


        } else if (category == "Computers") {
            cy.get(pageObjectDashboard.category_computers).click()
            cy.url().should('be.eq', "https://demowebshop.tricentis.com/computers")

        } else {
            cy.get(pageObjectDashboard.category_books).click()
            cy.url().should('be.eq', "https://demowebshop.tricentis.com/books")

        }

    }

    static selectProductFromPLP() {
        cy.get(pageObjectPLP.product_3).click()


    }
    static enterQuantity(quantity){
        cy.get(pageObjectPDP.field_qty).clear().type(quantity)
    }

    static AddToCartFromPDP() {
        cy.get(pageObjectPDP.AddToCartBtn).click()


    }
    static openShoppingCartPopup(){
        cy.get(pageObjectDashboard.shoppingCartBtn).trigger('mouseover')
        cy.get(pageObjectDashboard.CartPopUp).trigger('mouseover')
    }
    static goToCartFromPopUp(){
        cy.get(pageObjectDashboard.btn_GoToCartFromCartPopUp).click()
        cy.url().should('be.eq',"https://demowebshop.tricentis.com/cart")
    }
}
export default pdp