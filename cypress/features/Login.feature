Feature: Authentication of a user from the login page

    Background: 
        Given I navigate to the hudl login page

    Scenario: Log into the website using valid credentials
        When I login with valid credentials
        Then the home page is displayed

    Scenario: Login into the website after choosing to be remembered
        When I choose to be remembered
        And I login with valid credentials
        Then the home page is displayed

    Scenario: Attempt to login to the website with incorrect credentials
        When I login with incorrect credentials
        Then the user is offered help after failing authentication

    Scenario: Attempt to login to the website with invalid credentials
        When I login with invalid credentials
        Then the user is offered help after failing authentication

    Scenario: Attempt to login to the website with no credentials
        When I login with empty credentials
        Then the user is offered help after failing authentication
