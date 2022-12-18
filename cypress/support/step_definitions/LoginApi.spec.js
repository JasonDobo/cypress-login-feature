import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { validEmail, validPassword, firstName, invalidEmail } from "../../e2e/Pages/constants";

Given("I use api to login with valid credentials", function () {
    cy.request({
        method: "POST",
        url: "https://www.hudl.com/login",
        body: {
            "username": validEmail,
            "password" : validPassword,
            "rememberMe": false,
            "forward": null,
            "schoolId": null,
            "timezoneOffset": 0
        }
   }).then((response) => { 
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('forward');
        expect(response.body).to.have.property('firstName', firstName);
        expect(response.body).to.have.property('error', null);
   })
});

Given("I use api to login with invalid credentials", function () {
    cy.request({
        method: "POST",
        url: "https://www.hudl.com/login",
        body: {
            "username": invalidEmail,
            "password" : validPassword,
            "rememberMe": true,
            "forward": null,
            "schoolId": null,
            "timezoneOffset": 0
        }
   }).then((response) => { 
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('forward', null);
        expect(response.body).to.have.property('firstName', null);
        expect(response.body).to.have.property('error', 1);
   })
});

Given("I use api to be remembered and login with valid credentials", function () {
    cy.request({
        method: "POST",
        url: "https://www.hudl.com/login",
        body: {
            "username": validEmail,
            "password" : validPassword,
            "rememberMe": true,
            "forward": null,
            "schoolId": null,
            "timezoneOffset": 0
        }
   }).then((response) => { 
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', true);
        expect(response.body).to.have.property('forward');
        expect(response.body).to.have.property('firstName', firstName);
        expect(response.body).to.have.property('error', null);
   })
});

Given("I use api to login with missing credentials", function () {
    cy.request({
        method: "POST",
        url: "https://www.hudl.com/login",
        body: {
            "username": "",
            "password" : "",
            "rememberMe": false,
            "forward": null,
            "schoolId": null,
            "timezoneOffset": 0
        }
   }).then((response) => { 
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('forward', null);
        expect(response.body).to.have.property('firstName', null);
        expect(response.body).to.have.property('error', 1);
   })
});

Given("I use api to login with incorrectly formatted credentials", function () {
    cy.request({
        method: "POST",
        url: "https://www.hudl.com/login",
        body: {
            "username": 1,
            "password" : 2,
            "rememberMe": "false",
            "forward": "null",
            "schoolId": "null",
            "timezoneOffset": "one"
        }
   }).then((response) => { 
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('success', false);
        expect(response.body).to.have.property('forward', null);
        expect(response.body).to.have.property('firstName', null);
        expect(response.body).to.have.property('error', 1);
   })
});