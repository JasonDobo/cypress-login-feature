Feature: Navigate to and from the login page

    Scenario: Naviagte to login page from landing page
        Given I navigate to the hudl landing page
        When I select login from the landing page
        Then the login page is displayed

    Scenario: Navigate dirrectly to the login page
        When I navigate to the hudl login page
        Then the login page is displayed

    Scenario: Navigating dirrectly to the home page redirrects user to login page
        When I navigate to the hudl home page
        Then the login page is displayed

    Scenario: Navigate back to the landing page from login
        Given I navigate to the hudl login page
        When I select the back button from login
        Then the hudl homepage is displayed

    Scenario: Navigate to the landing page from login
        Given I navigate to the hudl login page
        When I select the hudl logo from login
        Then the hudl homepage is displayed

    Scenario: Enter login as organisation flow
        Given I navigate to the hudl login page
        When I select login as organization
        Then the login as organisation page is displayed
        And the user can return to login from login as organization

    Scenario: Enter registration flow
        Given I navigate to the hudl login page
        When I select Sign Up from login
        Then the registration page is displayed
        And the user can return to login from registration
