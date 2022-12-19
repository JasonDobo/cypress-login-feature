Feature: Authentication of a user from the login page using mocked response

    Background: 
        Given I navigate to the hudl login page

    Scenario: Log into the website using valid credentials
        When I login with mocked valid credentials
        Then the home page is displayed
