Feature: Register on banking site 

    Perform end to end testing of registration feature in application

    Background:
    Given A web browser is at the parabank register page

    Scenario: Success Register
    When User enter the required details for registration
    And User clicks on the register button
    Then The successful message "Your account was created successfully. You are now logged in." should be displayed

    Scenario: Empty Fields Register.
    When User clicks on the register button
    Then The total 10 errors should be displayed

    Scenario: Existing User Register
    When User enter the required details of existing user for registration
    And User clicks on the register button
    Then The error message "This username already exists." should be displayed