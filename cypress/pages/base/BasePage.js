class BasePage {
    constructor() {
        this.url = '';
        this.selectors = {};
        this.timeout = 10000;
    }

    // Shared methods for all pages
    visit(url) {
        cy.visit(url);
        return this;
    }

    getElement(selector) {
        return cy.get(selector, { timeout: this.timeout });
    }

    clickElement(selector) {
        cy.get(selector).click();
        return this;
    }

    typeText(selector, text) {
        cy.get(selector).type(text);
        return this;
    }

    verifyElementExists(selector) {
        this.getElement(selector).should('exist');
        return this;
    }

    verifyElementVisible(selector) {
        cy.get(selector).should('be.visible');
        return this;
    }

    verifyText(selector, text) {
        cy.get(selector).should('contain', text);
        return this;
    }

    waitForElement(selector) {
        this.getElement(selector).should('be.visible');
        return this;
    }

    scrollToElement(selector) {
        this.getElement(selector).scrollIntoView();
        return this;
    }

    verifyElementNotVisible(selector) {
        cy.get(selector).should('not.be.visible');
        return this;
    }
}

export default BasePage;