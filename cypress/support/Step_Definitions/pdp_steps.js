import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import pdp from "../../integration/2-advanced-examples/Pages/pdpclass";

Given('I select category as {string}',(category)=>{
    pdp.OpenCategory(category)
})
Then('I select a product from plp',()=>{
    pdp.selectProductFromPLP()
})
Then('I enter a quantity {string}',(quantity)=>{
    pdp.enterQuantity(quantity)
})
Then('I click on add to cart btn from pdp',()=>{
    pdp.AddToCartFromPDP()
})
Then('I hover on shopping cart from header',()=>{
    pdp.openShoppingCartPopup()
})
Then('I click on Go to Cart button from the shopping Cart Pop Up',()=>{
    pdp.openShoppingCartPopup()
    pdp.goToCartFromPopUp()
})
