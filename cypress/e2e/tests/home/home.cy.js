import LoginPage from '../../../pages/login/LoginPage';
import HomePage from '../../../pages/home/HomePage';

/**
 * Home Page Test Suite
 * This suite contains tests for the home page functionality including:
 * - UI element verification
 * - Product search
 * - Shopping list management
 * - Cart operations
 * - Logout functionality
 */
describe('Home Tests', { tags: ['@home', '@smoke'] }, () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  // Login before each test to ensure authenticated state
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      loginPage
        .visitLoginPage()
        .login(users.validUser.email, users.validUser.password);
    });
  });

  /**
   * Test: Home Page UI Elements
   * Verifies that all essential UI elements are present and visible
   * Steps:
   * 1. Verify navigation elements
   * 2. Verify action buttons
   * 3. Verify search functionality elements
   */
  it('Should display home elements correctly', { tags: ['@critical', '@ui'] }, () => {
    homePage
      .verifyHomeElements();
  });

  /**
   * Test: Product Search and Cart Addition
   * Verifies the product search functionality and cart operations
   * Steps:
   * 1. Search for a specific product
   * 2. Verify search results
   * 3. Add product to shopping list
   * 4. Add product to cart
   */
  it('Should search for a product and add to cart', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome');
    homePage.verifySearchResults();
    homePage.addProductToList();
    homePage.addToCart();
  });

  /**
   * Test: Shopping List Management
   * Verifies the shopping list functionality
   * Steps:
   * 1. Search for a product
   * 2. Add product to shopping list
   * 3. Clear the shopping list
   */
  it('Should add product to list and clear list', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome');
    homePage.verifySearchResults();
    homePage.addProductToList();
    homePage.clearList();
  });

  /**
   * Test: Logout Functionality
   * Verifies that the user can successfully log out
   * Steps:
   * 1. Click logout button
   * 2. Verify redirection to login page
   */
  it('Should logout successfully', { tags: ['@logout'] }, () => {
    homePage.logout();
    cy.url().should('include', '/login');
  });
});