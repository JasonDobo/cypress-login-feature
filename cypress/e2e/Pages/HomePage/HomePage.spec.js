const sidebarId = "#right-sidebar",
        exploreHeaderId = "#explore-header",
        userItemClass = ".hui-globaluseritem",
        userItemNameClass = ".hui-globaluseritem__display-name"

class HomePage {

    openURL() {
        cy.visit("https://www.hudl.com/home");
    }

    isDisplayed() {
        cy.get(sidebarId, { timeout: 2000 }).should('to.exist');
        cy.get(sidebarId).should('be.visible');
        cy.get(exploreHeaderId).should('be.visible');
    }

    userIsLoggedIn() {
        cy.get(userItemClass).should('be.visible');
        cy.get(userItemNameClass).should('be.visible');
    }
}

const homepage = new HomePage();
export default homepage;