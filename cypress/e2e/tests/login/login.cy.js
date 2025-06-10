import LoginPage from '../../../pages/login/LoginPage';
import HomePage from '../../../pages/home/HomePage';
import { TestData } from '../../../support/data/test-data';
import { faker } from '@faker-js/faker';

/**
 * Login Test Suite
 * This suite contains tests for the login functionality including:
 * - Successful login
 * - Failed login attempts
 * - Form validation
 * - Registration flow
 */
describe('Login Tests', { tags: ['@login'] }, () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  // Load test data before each test
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  /**
   * Test: Successful Login
   * Verifies that a user can successfully log in with valid credentials
   * Steps:
   * 1. Visit login page
   * 2. Enter valid credentials
   * 3. Verify successful login by checking home page elements
   */
  it('Should login successfully with valid credentials', { tags: ['@critical', '@positive'] }, function() {
    loginPage
      .visitLoginPage()
      .login(this.users.validUser.email, this.users.validUser.password);
    
    homePage.verifyHomeElements();
  });

  /**
   * Test: Failed Login and Registration
   * Verifies the error handling for invalid login and subsequent registration
   * Steps:
   * 1. Attempt login with invalid credentials
   * 2. Verify error message
   * 3. Navigate to registration
   * 4. Register with new user data
   * 5. Verify successful registration
   */
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

  /**
   * Test: Empty Form Validation
   * Verifies that the login form properly validates empty submissions
   * Steps:
   * 1. Visit login page
   * 2. Submit empty form
   * 3. Verify appropriate error message
   */
  it('Should validate empty form submission', { tags: ['@validation'] }, () => {
    loginPage
      .visitLoginPage()
      .clickLoginButton()
      .verifyErrorMessage('Email é obrigatório');
  });
});