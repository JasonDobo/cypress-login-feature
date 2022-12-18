const hudlLogoClass = ".styles_hudlLogoContainer_1L8Lig-sH69T84pB_fXSlv",
      needHelpAlertClass = ".styles_errorDisplayInnerContainer_3R2ni-zSvPIKWfKXiviJhH",
      rememberCheckBoxClass = ".uni-form__label--check",
      backButtonClass = ".styles_backIcon_1nBYGKhbTIbTmIULDJg1MZ",
      navigationBaseClass = ".styles_footerContainer_bNIg7bOb-wpsYiG0CCy0M",
      loginAsOrganization = ".uni-link--wrapper > .uni-button"
      emailId = "#email",
      passwordId = "#password",
      loginButtonId = "#logIn",
      needHelpQaId = "[data-qa-id=\"error-display\"]",
      organizationLoginQaId = "[data-qa-id=\"log-in-with-organization-btn\"]"

class LoginPage {
    _remember = false
    _email = ""
    _password = ""
    
    openURL() {
        cy.intercept('GET', 'https://www.hudl.com/login').as("loginRequest");
        cy.visit("https://www.hudl.com/login");
        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)
        cy.location('pathname', {timeout: 2000}).should('include', '/login')
    }

    isDisplayed() {
        cy.get(hudlLogoClass, { timeout: 2000 }).should('be.visible')
        cy.get(needHelpAlertClass).should('not.be.visible')
        cy.get(rememberCheckBoxClass).should('not.be.checked')

        cy.get(emailId).should('be.visible')
        cy.get(passwordId).should('be.visible')
        cy.get(loginButtonId).should('be.visible')
        cy.get(loginButtonId).should('be.enabled')
    }

    navigationOptionsAreDisplayed() {
        cy.get(backButtonClass).should('be.visible')
        cy.get(navigationBaseClass).should('be.visible')
    }

    alternateLoginDisplayed() {
        cy.get(organizationLoginQaId).should('be.visible')
    }

    enterUserName(email) {
        cy.get(emailId)
            .should('be.visible')
            .click()
            .type(email)
        this._email = email
    }

    clearEmail() {
        cy.get(passwordId).clear()
        this._email = ""
    }

    enterPassword(pwd) {
        cy.get(passwordId)
            .should('be.visible')
            .click()
            .type(pwd)
        this._password = pwd
    }

    clearPassword() {
        cy.get(passwordId).clear()
        this._password = ""
    }

    selectLogin() {
        cy.intercept('POST', 'https://www.hudl.com/login').as("loginRequest");
        cy.get(loginButtonId)
            .should('be.visible')
            .click()

        cy.wait('@loginRequest').its('request.body.rememberMe').should('eq', this._remember)
        cy.get('@loginRequest').its('request.body.username').should('eq', this._email)
        cy.get('@loginRequest').its('request.body.password').should('eq', this._password)
        cy.get('@loginRequest').its('response.statusCode').should('eq', 200)
        this._remember = false
    }

    selectRememberMe() {
        cy.get(rememberCheckBoxClass)
            .should('be.visible')
            .click()

        // cy.get(rememberCheckBoxClass).should('be.checked')
        this._remember = true;
    }

    userFailedToLogin() {
        cy.get(needHelpAlertClass, { timeout: 2000 }).should('be.visible')
        cy.get(needHelpQaId).should('be.visible')
    }

    selectNeedHelpFromAlert() {
        cy.get(needHelpAlertClass)
            .find('.uni-link')
            .click()
    }

    selectBack() {
        cy.get(backButtonClass).should('be.visible')
            .click()
    }

    selectLogo() {
        cy.get(hudlLogoClass).should('be.visible')
            .click()
    }

    selectLoginAsOrganization() {
        cy.get(loginAsOrganization).should('be.visible')
            .click()
    }

    selectNeedHelp() {
        cy.get(navigationBaseClass)
            .find('.uni-link')
            .click()
    }

    selectSignUp() {
        cy.contains('Sign up').should("be.visible")
            .click()
    }
}

const loginpage = new LoginPage();
export default loginpage;
