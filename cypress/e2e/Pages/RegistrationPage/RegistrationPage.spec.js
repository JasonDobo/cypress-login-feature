const hudlLogoQaId = '[data-qa-id="site-logo"]',
        loginButtonQaId = "[data-qa-id=\"login\"]",
        mainViewId = "#s_133036"

class RegistrationPage {

    isDisplayed() {
        cy.get(mainViewId, { timeout: 2000 }).should('to.exist');
        cy.get(hudlLogoQaId).should("be.visible")
        cy.get(loginButtonQaId).should('be.visible')
    }

    selectLogin() {
        cy.get(loginButtonQaId).should('to.visible')
            .click();
    }
}

const registrationpage = new RegistrationPage();
export default registrationpage;