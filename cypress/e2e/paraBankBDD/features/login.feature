Feature: User login on banking site 

    Perform end to end testing of login feature in application

    Background:
    Given A web browser is at the parabank login page

    Scenario: Empty Fields Login
    When User clicks on Login
    Then The error message "Please enter a username and password." is displayed

    Scenario: Successful Login
    When User enters valid username & password 
    And User clicks on Login
    Then display login successful message