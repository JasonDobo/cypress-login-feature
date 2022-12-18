# Cypress login feature tests
This is a set of cypress test scenarios for the login feature. The test scenarios in the repo are intended to tests the front end e2e journeys, api requests and ui with mocked data.

# Tooling
From a tooling perspective I had a number of different options, [selenium](https://www.selenium.dev), [cypress](https://go.cypress.io), [postman](https://www.postman.com) or [REST Assured](https://rest-assured.io). While I have used these tools in the past, for this exercise I've selected Cypress as the base framework, which supports e2e test scenarios, api tests, intercepting and mocking network requests.

# Setup Instructions
This section details how to setup the project in order to run the framework and tests. However for reference the setup instructions for the [project dependencies](#dependencies) and general instructions on how to [setup a new cypress project](#cypress-initial-setup) have been included in the appendix. These are for reference and to help with creating new projects, but should not be needed to run the test scenarios. 

## Setup
The following steps detail how to setup the project to run the test scenarios. This assumes you have downloaded the [project](https://github.com/JasonDobo/cypress-cucumber-example) either via git clone or by downloading the zip file. 
- clone the repository into a local folder or unzip an archive
- Make sure you have `node.js` installed and setup on your machine if not see [here](#dependencies) 
- Run the command `npm install` this will install all dependencies
- Optional, I've developed and tested the test scenarios on both `chrome` and `Electron`. 
    - Electron is included with cypress and requires no further setup. 
    - For Chrome use this [Link](https://www.google.co.uk/chrome/) and install the browser.

## Running Tests
With cypress we have two ways to run tests. Either from the command line or the cypress UI. Given cypress does not support running all tests in a single run from the UI. I would start by running all tests from the command line and then use UI to verify individual feature files if required.
- To run tests from the cypress UI, use the following command `npx cypress open` to launch cypress. 
    - Then select `E2E Testing` to load the feature files
    - Followed by selecting the browser you wish to test on. With my setup this was `Chrome` or `Electron`, both browsers can run the tests fine. 
- To run all the tests from the command line use the command `npx cypress run` to run all tests on the default browser `Electron`
    - It is possible to run on `Chrome` from the command line using the command `npx cypress run --browser chrome` 

# Test Scenarios
As mentioned above it was my intention to develop e2e and api tests for the login feature. I also intend to utilize `cy.intercept` to check requests made by the website. 

## Definition
To start with I completed exploratory testing of the login feature on the frontend, using chrome develper tools to review network requests and storage. This was done to idenify the test scnearios I was planning on automating. 

## Scenarios
Each test scenario is detailed in more detail in the `feature` files, but for here I've listed the tests I created for the exercise.

### E2E Scenarios
- Navigateing to login page
    - Directly using url
    - From main site and home page
    - And from redirect
- While on the login page
    - Check page is displayed, including: 
        - Email field, with initial empty state
        - Password field, with initial empty state
        - Login button, which is always enabled
    - Check remember me
        - Should be disabled by default
        - Enabling should cause cookie to be set
- Navigate away from the login page
    - Return to the main page using back button and logo
    - Go to the need help section
        - From main button and after failing validation
    - Enter registration flow
- Login using an organization
    - After confirming in email, this is out of scope for this exercise 
    - But I will check user can enter the flow
- End to end scenarios
    - Login with valid credentials
    - Attempt to login with invalid credentials
    - Attempt to login with malformed credentials i.e. email
    - Attempt to login with no credentials

### API Tests
From reviewing the console in chrome the main endpoint for use authentication is `https://www.hudl.com/login` however for this project I have defined two different types of API tests, the first and more normal is to make network requests and validate the response. The second is to use `cy.intercept` to make sure the site is making the correct request when the login feature is being used.

#### API Test Scenarios
- Attempt to login using the end `POST https://www.hudl.com/login` endpoint
    - Success, failure, remember me and malformed
- Check that when loading the login page, the site checks login state
- Check that when the user logs in from the site, that the correct request is made with the correct scheme

## Unexpected Results
I've written the tests on the basis of the current behavior being correct, though I would have expected some results to be different.  
- When the `POST /login` request fails due to incorrect credentials, I would have expected the status code to be `401 Unauthorized`
- Passing in invalid data, would have cause a specific error message i.e. `username must be of type string`

## Improvements and variations
While writing these tests I identified a number of points I would've liked to change or spent more time on.
- I identified few elements using their class, and while this works. I would have preferred to use an element id or data-qa-id in all cases. To solve this I would have normally updating the source to add extra id's.
- I also chose to use cucumber and while the plugin works. It does not support `examples` which meant more repetition in the test scenarios. For example in the login failed scenarios, I would normally have merged these tests and used an examples table. 
- I've included test scenarios for `need help` `password reset` specifically where they interact with the login feature, but I've considered these out of scope for this exercise
- I confirmed in email `login with an organization` is not part of the exercise, though if this was a new feature I would have tested both login flows.
- Testing of remember me by closing and opening a window, was causing cypress to clear the cache which broke the functionality. As a partial work around I intercepted the network request and verified the parameter being sent in the request.
- Check box check did not work, I assume this was my issue as all documentation says it should have worked
- Logout should clear the applicaiton data, but I ran out of time for this scenario

# Appendix

### Dependencies
To begin with we need to prepare the MacBook's environment to be able to run node js. I have detailed my developer setup here for reference, though in theory if your Mac is already setup, you can skip this section. 
- Install homebrew using the terminal command `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` 
    - This command will install homebrew, a package manager got Mac, the version installed was `3.6.14`
- Install node js using the homebrew command `brew install node`
    - This installs `Node.js`, npm version `8.19.3` and node version `v19.2.0`
- For my IDE I decided to use [Visual Studio](https://visualstudio.microsoft.com/vs/mac/) for Mac. Though any should IDE capable of editing javascript should be sufficient. 

### Cypress Initial Setup
The steps below are for reference and detail how to setup cypress with cucumber for a new project. This is for reference only and also should not be required.
- Create an empty folder, in which you wish to create a cypress project and navigate to the folder in terminal.
- Run `npm init` to initialize `node.js` and create a `package.json` 
- Use npm to install cypress `npm install cypress --save-dev` 
    - This installed cypress to the folder in the `node_modules` folder
    - The version of cypress installed was `12.0.2`
- Install Cucumber plugins for Cypress using the following npm commands
    - `npm install -D @badeball/cypress-cucumber-preprocessor` version `15.0.0`
    - `npm install -D @bahmutov/cypress-esbuild-preprocessor` version `2.1.5`

### Environment Versions
I have included my computer setup and software versions here as reference. 
- `2.6 GHz 6-Core Intel Core i7` running `13.0.1 (22A400)`
- Chrome version `Version 108.0.5359.98 (Official Build) (x86_64)` 
