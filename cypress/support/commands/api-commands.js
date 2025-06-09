// API specific commands
Cypress.Commands.add('apiLogin', (email, password) => {
    return cy.request({
        method: 'POST',
        url: '/api/login',
        body: {
            email,
            password
        }
    });
});

Cypress.Commands.add('apiLogout', () => {
    return cy.request({
        method: 'POST',
        url: '/api/logout'
    });
}); 