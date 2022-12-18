const backButtonQaId = "[data-qa-id=\"go-back\"]",
        emailFieldQaId = "[data-qa-id=\"undefined-label\"]",
        loginButtonQaId = "[data-qa-id=\"log-in-with-sso\"]",
        loginWithEmailButtonQaId = "[data-qa-id=\"log-in-with-email-and-password\"]"

class LoginOrganizationPage {

    isDisplayed() {
        cy.get(emailFieldQaId, { timeout: 20000 }).should('to.exist');
        cy.get(backButtonQaId).should('be.visible')
        cy.get(emailFieldQaId).should('be.visible')
        cy.get(loginButtonQaId).should('be.visible')
        cy.get(loginButtonQaId).should('be.disabled')
        cy.get(loginWithEmailButtonQaId).should('be.visible')
    }

    selectBack() {
        cy.get(backButtonQaId).should('to.visible')
            .click()
    }

    selectLoginWithEmail() {
        cy.get(loginWithEmailButtonQaId).should('to.visible')
            .click()
    }
}

const loginorganizationpage = new LoginOrganizationPage();
export default loginorganizationpage;