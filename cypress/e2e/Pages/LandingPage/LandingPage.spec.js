class LandingPage {
    
    openURL() {
        cy.visit("https://www.hudl.com/");
    }

    isDisplayed() {
        cy.get('#site-navigation', { timeout: 2000 }).should('to.exist');
        cy.get("#onetrust-accept-btn-handler").then($button => {
            if ($button.is(':visible')) {
                $button.click()
            }
          })

        cy.get('[data-qa-id="site-logo"]')
            .should('to.visible')
        cy.get('.mainnav__sitename')
            .should('be.visible')
    }

    selectLogin() {
        cy.get('.mainnav__actions > .mainnav__btn--primary')
            .click();
    }
}

const landingpage = new LandingPage();
export default landingpage;