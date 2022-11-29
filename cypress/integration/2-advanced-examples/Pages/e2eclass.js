import login from "./loginclass";
import pdp from "./pdpclass";

class e2e{
    static login(){
        login.PerformLogin()
    }
    static addProductAndGoToCart(){
        pdp.AddProductToCart()
    }
    static checkout(){

    }

}
export default e2e