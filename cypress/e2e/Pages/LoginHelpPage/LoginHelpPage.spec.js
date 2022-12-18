const loginHelpHeadlineQaId = "[data-qa-id=\"login-help-headline\"]",
        emailFieldQaId = "[data-qa-id=\"password-reset-input\"]",
        resetPasswordButtonQaId = "[data-qa-id=\"password-reset-submit-btn\"]",
        emailHelpHeadlineQaId = "[data-qa-id=\"email-help-headline\"]",
        forgotEmailHeadlineQaId = "[data-qa-id=\"forgot-email-headline\"]",
        forgotEmailCopyQaId = "[data-qa-id=\"forgot-email-copy\"]",
        didntReceiveHeadlineQaId = "[data-qa-id=\"didnt-receive-headline\"]",
        didntReceiveCopyQaId = "[data-qa-id=\"didnt-receive-copy\"]",
        stillTroubleHeadlineQaId = "[data-qa-id=\"still-trouble-headline\"]",
        stillTroubleCopyQaId = "[data-qa-id=\"still-trouble-copy\"]",
        hudlLogoQaId = "[data-qa-id=\"hudl-logo\"]",
        backButtonClass = ".styles_backIconContainer_MhkioW9m8rx70X7CIGuws"

class LoginHelpPage {

    isDisplayed() {
        cy.get(loginHelpHeadlineQaId, { timeout: 2000 }).should('to.visible')
        cy.get(emailFieldQaId)
            .should('to.visible')
            .should('have.value', '');
        cy.get(resetPasswordButtonQaId)
            .should('to.visible')
            .should('be.disabled')
        cy.contains('support@hudl.com').should('to.exist')
    }

    helperCopyIsDisplayed() {
        cy.get(emailHelpHeadlineQaId).should('to.visible')
        cy.get(forgotEmailHeadlineQaId).should('to.visible')
        cy.get(forgotEmailCopyQaId).should('to.visible')
        cy.get(didntReceiveHeadlineQaId).should('to.visible')
        cy.get(didntReceiveCopyQaId).should('to.visible')
        cy.get(stillTroubleHeadlineQaId).should('to.exist')
        cy.get(stillTroubleCopyQaId).should('to.exist')
    }

    selectBack() {
        cy.get(backButtonClass)
            .should('to.visible')
            .click()
    }

    selectLogo() {
        cy.get(hudlLogoQaId).first()
            .should('to.visible')
            .click({ force: true })
    }
}

const loginhelppage = new LoginHelpPage();
export default loginhelppage;