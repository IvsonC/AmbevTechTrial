// Common Cypress commands
Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test="${selector}"]`);
});

Cypress.Commands.add('getByClass', (selector) => {
    return cy.get(`.${selector}`);
});

Cypress.Commands.add('getById', (selector) => {
    return cy.get(`#${selector}`);
}); 

Cypress.Commands.add('loginWithUI', (email, password) => {
    cy.visit('/login');
    cy.get('[data-testid="email-input"]').type(email);
    cy.get('[data-testid="password-input"]').type(password);
    cy.get('[data-testid="login-button"]').click();
  });
  
  Cypress.Commands.add('loginWithAPI', (email, password) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.config('baseApiUrl')}usuarios`,
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