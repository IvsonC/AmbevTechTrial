import LoginPage from '../../../pages/login/LoginPage';
import HomePage from '../../../pages/home/HomePage';
import { TestData } from '../../../support/data/test-data';
import { faker } from '@faker-js/faker';

describe('Login Tests', { tags: ['@login'] }, () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Should login successfully with valid credentials', { tags: ['@critical', '@positive'] }, function() {
    loginPage
      .visitLoginPage()
      .login(this.users.validUser.email, this.users.validUser.password);
    
    homePage.verifyHomeElements();
  });

  it('Should show error message with invalid credentials then register', { tags: ['@negative'] }, function() {
    const testData = {
      firstName: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    loginPage
      .visitLoginPage()
      .login(this.users.invalidUser.email, this.users.invalidUser.password)
      .verifyErrorMessage('Email e/ou senha inválidos');
    loginPage.clickSignUpLink();
    loginPage.registerUser(testData.firstName, testData.email, testData.password);
    homePage.verifyHomeElements();
  });

  it('Should validate empty form submission', { tags: ['@validation'] }, () => {
    loginPage
      .visitLoginPage()
      .clickLoginButton()
      .verifyErrorMessage('Email é obrigatório');
  });
});