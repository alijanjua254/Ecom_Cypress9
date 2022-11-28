import {Given} from "cypress-cucumber-preprocessor/steps";
import dashboard from "../../integration/2-advanced-examples/Pages/dashboardclass";

Given("I am at the storefront",() =>{
    dashboard.visitHomepage()
})