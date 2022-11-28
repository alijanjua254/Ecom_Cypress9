Feature: Test Case for Login

  Background:
    Given I am at the storefront

  Scenario: Verify user is able to perform login with existing account
    Then I click on login link
    Then I enter valid credentials
    Then I click on login button
    Then I should be logged into application