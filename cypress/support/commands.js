// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Custom commands for common actions

Cypress.Commands.add('loginWithUI', (email, password) => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="login-button"]').click();
  });
  
  Cypress.Commands.add('loginWithAPI', (email, password) => {
    cy.request({
      method: 'POST',
      url: '/api/auth/login',
      body: {
        email: email,
        password: password
      }
    }).then((response) => {
      window.localStorage.setItem('authToken', response.body.token);
    });
  });
  
  import { faker } from '@faker-js/faker';

Cypress.Commands.add('generateTestData', () => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode()
  };
});