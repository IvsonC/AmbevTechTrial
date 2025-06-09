import BasePage from '../base/BasePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.url = '/login';
    this.selectors = {
      emailInput: '[data-testid="email"]',
      passwordInput: '[data-testid="senha"]',
      loginButton: '[data-testid="entrar"]',
      errorMessage: '[xpath="(//div[@role="alert"])[1]"]',
      signUpLink: '[data-testid="cadastrar"]'
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