class BasePage {
    constructor() {
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
      this.getElement(selector).click();
      return this;
    }
  
    typeText(selector, text) {
      this.getElement(selector).clear().type(text);
      return this;
    }
  
    verifyElementExists(selector) {
      this.getElement(selector).should('exist');
      return this;
    }
  
    verifyElementVisible(selector) {
      this.getElement(selector).should('be.visible');
      return this;
    }
  
    verifyText(selector, text) {
      this.getElement(selector).should('contain.text', text);
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
  }
  
  export default BasePage;