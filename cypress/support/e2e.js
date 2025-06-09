// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands/commands';
import './commands/login-commands';
import './commands/api-commands';
import 'cypress-mochawesome-reporter/register';
import '@cypress/grep';

// Alternatively you can use CommonJS syntax:
// require('./commands/commands')
// require('./commands/login-commands')
// require('./commands/api-commands')

// Global configuration
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Before each test
beforeEach(() => {
  cy.log('Starting test execution');
});

// After each test
afterEach(() => {
  cy.log('Test execution completed');
});

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
    app.document.addEventListener('DOMContentLoaded', () => {
        const style = app.document.createElement('style');
        style.innerHTML = '.command-name-request, .command-name-xhr { display: none }';
        app.document.head.appendChild(style);
    });
}