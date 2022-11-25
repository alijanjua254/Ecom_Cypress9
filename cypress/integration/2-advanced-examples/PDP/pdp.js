import loginclass from "../Pages/loginclass";
import pdpclass from "../Pages/pdpclass";

//verify user is able to add product to cart from pdp screen with logged-in user
describe('pdp functionality',()=>{

    //access application
// it('should access application', function () {
//     cy.visit('https://demowebshop.tricentis.com/')
//
// });
    it('should login with valid creds and add product to cart', ()=>{
        loginclass.PerformLogin()
        //if I want to run the test case by referencing only 1 function
        //(I cannot pass category through here dynamically if I do that

        pdpclass.AddProductToCart()

        // if I want to run the test case by referencing all the functions
        //here I can enter the category, quantity etc. dynamically

        // pdpclass.OpenCategory("Books")
        // pdpclass.selectProductFromPLP()
        // pdpclass.enterQuantity(3)
        // pdpclass.AddToCartFromPDP()



    })

})


//perform valid login

//select a category
//select a product from plp
//click on add to cart btn from pdp