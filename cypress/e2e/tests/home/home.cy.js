import LoginPage from '../../../pages/login/LoginPage';
import HomePage from '../../../pages/home/HomePage';

describe('Home Tests', { tags: ['@home', '@smoke'] }, () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage
        .visitLoginPage()
        .login(users.validUser.email, users.validUser.password);
    });
  });

  it('Should display home elements correctly', { tags: ['@critical', '@ui'] }, () => {
    homePage
      .verifyHomeElements();
  });

  it('Should logout successfully', { tags: ['@logout'] }, () => {
    homePage.logout();
    cy.url().should('include', '/login');
  });
});