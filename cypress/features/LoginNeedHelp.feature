Feature: Verify how the Login Need Help interacts with the login flow

    Background: 
        Given I navigate to the hudl login page

    Scenario: Open Need Help after failing authentication
        Given I login with empty credentials
        When I select Need Help from the need help alert
        Then the login help page is displayed

    Scenario: Open Need Help from login
        When I select Need Help from login page
        Then the login help page is displayed

    Scenario: Navigate to the landing page from login using logo
        Given I navigate to the need help page from login
        When I select the hudl logo from need help
        Then the hudl homepage page is displayed

    Scenario: Navigate to the landing page from need help
        Given I navigate to the need help page from login
        When I select the back button from need help
        Then the login page is displayed
