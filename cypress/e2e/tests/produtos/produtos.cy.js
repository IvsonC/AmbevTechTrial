import LoginPage from '../../../pages/login/LoginPage';
import HomePage from '../../../pages/home/HomePage';
import { faker } from '@faker-js/faker';

/**
 * Products Test Suite
 * This suite contains tests for product management functionality including:
 * - Product listing
 * - Product search
 * - Product details
 * - Product filtering
 * - Product sorting
 */
describe('Products Tests', { tags: ['@products', 'ui'] }, () => {
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
   * Test: Product Search Functionality
   * Verifies that users can search for products and view results
   * Steps:
   * 1. Search for a specific product
   * 2. Verify search results are displayed
   * 3. Verify product details in results
   */
  it('Should search for a product and display results', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome Plastic');
    homePage.verifySearchResults();
  });

  /**
   * Test: Product List Management
   * Verifies the shopping list functionality for products
   * Steps:
   * 1. Search for a product
   * 2. Add product to shopping list
   * 3. Verify product is added to list
   * 4. Clear the shopping list
   */
  it('Should add product to list and clear list', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome Plastic');
    homePage.verifySearchResults();
    homePage.addProductToList();
    homePage.clearList();
  });

  /**
   * Test: Product Cart Operations
   * Verifies the cart functionality for products
   * Steps:
   * 1. Search for a product
   * 2. Add product to shopping list
   * 3. Add product to cart
   * 4. Verify cart operations
   */
  it('Should add product to cart', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome Plastic');
    homePage.verifySearchResults();
    homePage.addProductToList();
    homePage.addToCart();
  });

  /**
   * Test: Product Details View
   * Verifies that product details are displayed correctly
   * Steps:
   * 1. Search for a product
   * 2. Click on product to view details
   * 3. Verify product information
   */
  it('Should display product details', { tags: ['@critical', '@ui'] }, () => {
    homePage.searchForProduct('Awesome Plastic');
    homePage.verifySearchResults();
    homePage.viewProductDetails();
  });

  /**
   * Test: Product Filtering
   * Verifies that product filtering works correctly
   * Steps:
   * 1. Apply product filters
   * 2. Verify filtered results
   * 3. Clear filters
   */
  it('Should filter products', { tags: ['@critical', '@ui'] }, () => {
    homePage.applyProductFilters();
    homePage.verifyFilteredResults();
    homePage.clearFilters();
  });

  /**
   * Test: Product Sorting
   * Verifies that product sorting works correctly
   * Steps:
   * 1. Apply different sort options
   * 2. Verify sorted results
   */
  it('Should sort products', { tags: ['@critical', '@ui'] }, () => {
    homePage.sortProducts('price');
    homePage.verifySortedResults();
  });
}); 