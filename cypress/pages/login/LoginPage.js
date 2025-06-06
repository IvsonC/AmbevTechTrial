import BasePage from '../base/BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = '/login';
    this.selectors = {
      emailInput: '[data-testid="email-input"]',
      passwordInput: '[data-testid="password-input"]',
      loginButton: '[data-testid="login-button"]',
      errorMessage: '[data-testid="error-message"]',
      forgotPasswordLink: '[data-testid="forgot-password-link"]',
      signUpLink: '[data-testid="signup-link"]'
    };
  }

  visitLoginPage() {
    this.visit(this.url);
    return this;
  }

  enterEmail(email) {
    this.typeText(this.selectors.emailInput, email);
    return this;
  }

  enterPassword(password) {
    this.typeText(this.selectors.passwordInput, password);
    return this;
  }

  clickLoginButton() {
    this.clickElement(this.selectors.loginButton);
    return this;
  }

  verifyErrorMessage(message) {
    this.verifyText(this.selectors.errorMessage, message);
    return this;
  }

  login(email, password) {
    this.enterEmail(email)
        .enterPassword(password)
        .clickLoginButton();
    return this;
  }
}

export default LoginPage;