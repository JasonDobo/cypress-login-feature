Feature: Tests the https://www.hudl.com/login endpoint

    Scenario: Authticate a user using the login endpoint
        Given I use api to login with valid credentials

    Scenario: Authticate a user using the login endpoint and be remembered
        Given I use api to be remembered and login with valid credentials

    Scenario: Fail to Authticate a user using the login endpoint
        Given I use api to login with invalid credentials

    Scenario: Fail to Authticate a user as credentials are missing
        Given I use api to login with missing credentials

    Scenario: Attempt to pass in invalid data types to login
        Given I use api to login with incorrectly formatted credentials
