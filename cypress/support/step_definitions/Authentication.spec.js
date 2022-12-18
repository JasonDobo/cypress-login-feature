import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { validEmail, validPassword, incorrectEmail, incorrectPassword, invalidEmail } from "../../e2e/Pages/constants";
import loginpage from "../../e2e/Pages/LoginPage/LoginPage.spec";

When("I login with valid credentials", () => {
    loginpage.enterUserName(validEmail);
    loginpage.enterPassword(validPassword);
    loginpage.selectLogin();
});

When("I login with incorrect credentials", () => {
    loginpage.enterUserName(incorrectEmail);
    loginpage.enterPassword(incorrectPassword);
    loginpage.selectLogin();
});

When("I login with invalid credentials", () => {
    loginpage.enterUserName(invalidEmail);
    loginpage.enterPassword(validPassword);
    loginpage.selectLogin();
});

When("I login with empty credentials", () => {
    loginpage.clearEmail();
    loginpage.clearPassword();
    loginpage.selectLogin();
});

When("I choose to be remembered", function () {
    loginpage.selectRememberMe();
});

Then("the user is offered help after failing authentication", () => {
    loginpage.userFailedToLogin();
    loginpage.selectNeedHelpFromAlert();
});

When("I select Need Help from the need help alert", () => {
    loginpage.userFailedToLogin();
    loginpage.selectNeedHelpFromAlert();
});

Given("I select Need Help from login page", function () {
    loginpage.isDisplayed();
    loginpage.selectNeedHelp();
});
