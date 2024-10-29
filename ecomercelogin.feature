Feature: Verify login functionality

  Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My account"
    And I enter E-Mail Address as "pranav@testroverautomation.com"
    And I enter password as "Test1234"
    When I click on the submit button
    Then I should verify the URL contains "route=account/account"
