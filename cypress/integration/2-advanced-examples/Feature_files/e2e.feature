
Feature: Test Case for PDP

  Background:
    Given I am at the storefront

  Scenario: Verify user is able to perform login with existing account and go to checkout after adding item to cart
    Then I click on login link
    Then I enter valid credentials
    Then I click on login button
    Then I should be logged into application
    Then I select category as "Books"
    Then I select a product from plp
    Then I enter a quantity "2"
    Then I click on add to cart btn from pdp
    Then I hover on shopping cart from header
    And I click on Go to Cart button from the shopping Cart Pop Up
    Then I accept terms and conditions and click on checkout button
    Then I select country as "Argentina" and click continue
#    Then I click continue on shipping address screen
#    Then I click continue button on shipping method screen
#    Then I click continue button on payment method screen
#    Then I click continue button on payment information screen
#    Then I confirm order