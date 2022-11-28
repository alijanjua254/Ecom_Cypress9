import login from "../../../integration/2-advanced-examples/Pages/loginclass";
import pdp from "../../../integration/2-advanced-examples/Pages/pdpclass";

//verify user is able to add product to cart from pdp screen with logged-in user
describe('pdp functionality',()=>{

    //access application
// it('should access application', function () {
//     cy.visit('https://demowebshop.tricentis.com/')
//
// });
    it('should login with valid creds and add product to cart', ()=>{
        login.PerformLogin()
        //if I want to run the test case by referencing only 1 function
        //(I cannot pass category through here dynamically if I do that

        pdp.AddProductToCart()

        // if I want to run the test case by referencing all the functions
        //here I can enter the category, quantity etc. dynamically

        // pdp.OpenCategory("Books")
        // pdp.selectProductFromPLP()
        // pdp.enterQuantity(3)
        // pdp.AddToCartFromPDP()



    })

})


//perform valid login

//select a category
//select a product from plp
//click on add to cart btn from pdp