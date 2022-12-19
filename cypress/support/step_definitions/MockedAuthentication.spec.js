import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { validEmail, validPassword, firstName, invalidEmail } from "../../e2e/Pages/constants";
import loginpage from "../../e2e/Pages/LoginPage/LoginPage.spec";

Given("I login with mocked valid credentials", function () {
    loginpage.mockLogin()

    loginpage.enterUserName(invalidEmail);
    loginpage.enterPassword(validPassword);
    loginpage.selectLogin();
});