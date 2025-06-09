// Login specific commands
Cypress.Commands.add('login', (email, password) => {
    cy.getByData('email-input').type(email);
    cy.getByData('password-input').type(password);
    cy.getByData('login-button').click();
});

Cypress.Commands.add('logout', () => {
    cy.getByData('logout-button').click();
}); 