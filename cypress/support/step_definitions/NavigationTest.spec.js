import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../e2e/Pages/HomePage/HomePage.spec.js";
import loginpage from "../../e2e/Pages/LoginPage/LoginPage.spec.js";
import landingpage from "../../e2e/Pages/LandingPage/LandingPage.spec.js";
import loginhelppage from "../../e2e/Pages/LoginHelpPage/LoginHelpPage.spec.js";
import loginorganizationpage from "../../e2e/Pages/LoginOrganizationPage/LoginOrganizationPage.spec.js"
import registrationpage from "../../e2e/Pages/RegistrationPage/RegistrationPage.spec.js"

Given("I navigate to the hudl landing page", function () {
    landingpage.openURL(); 
    landingpage.isDisplayed();
});

When("I select login from the landing page", function () {
    landingpage.selectLogin()
});

Then("the hudl homepage page is displayed", function () {
    landingpage.openURL();
    landingpage.isDisplayed();
});

Then("the hudl homepage is displayed", function () {
    landingpage.isDisplayed()
});

Given("I navigate to the hudl login page", () => {
    loginpage.openURL()
    loginpage.isDisplayed()
});

Then("the login page is displayed", function () {
    loginpage.isDisplayed()
    loginpage.navigationOptionsAreDisplayed()
    loginpage.alternateLoginDisplayed()
});

When("I select the back button from login", function () {
    loginpage.selectBack()
});

When("I select the hudl logo from login", function () {
    loginpage.selectLogo()
});

When("I select login as organization", function () {
    loginpage.selectLoginAsOrganization()
});

When("I select Sign Up from login", function () {
    loginpage.selectSignUp()
});

Given("I navigate to the need help page from login", () => {
    loginpage.selectNeedHelp()
    loginhelppage.isDisplayed()
});

Then("the login help page is displayed", function () {
    loginhelppage.isDisplayed()
    loginhelppage.helperCopyIsDisplayed()
});

When("I select the hudl logo from need help", function () {
    loginhelppage.selectLogo()
});

When("I select the back button from need help", function () {
    loginhelppage.selectBack()
});

When("I navigate to the hudl home page", () => {
    homepage.openURL();
});

Then("the home page is displayed", function () {
    homepage.isDisplayed()
    homepage.userIsLoggedIn()
});

Then("the login as organisation page is displayed", function () {
    loginorganizationpage.isDisplayed()
});

Then("the user can return to login from login as organization", function () {
    loginorganizationpage.selectBack()
    loginpage.isDisplayed()

    loginpage.selectLoginAsOrganization()
    loginorganizationpage.isDisplayed()
    loginorganizationpage.selectLoginWithEmail()
    loginpage.isDisplayed()
});

Given("the registration page is displayed", function () {
    registrationpage.isDisplayed()
});

Given("the user can return to login from registration", function () {
    registrationpage.selectLogin()
    loginpage.isDisplayed()
});
