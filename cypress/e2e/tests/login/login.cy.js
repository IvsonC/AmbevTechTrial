import LoginPage from '../../../pages/login/LoginPage';
import DashboardPage from '../../../pages/home/HomePage';
import { TestData } from '../../../support/data/test-data';

describe('Login Tests', { tags: ['@login'] }, () => {
  const loginPage = new LoginPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('Should login successfully with valid credentials', { tags: ['@critical', '@positive'] }, function() {
    loginPage
      .visitLoginPage()
      .login(this.users.validUser.email, this.users.validUser.password);
    
    dashboardPage.verifyDashboardLoaded();
  });

  it('Should show error message with invalid credentials', { tags: ['@negative'] }, function() {
    loginPage
      .visitLoginPage()
      .login(this.users.invalidUser.email, this.users.invalidUser.password)
      .verifyErrorMessage('Invalid credentials');
  });

  it('Should validate empty form submission', { tags: ['@validation'] }, () => {
    loginPage
      .visitLoginPage()
      .clickLoginButton()
      .verifyErrorMessage('Please fill in all fields');
  });
});