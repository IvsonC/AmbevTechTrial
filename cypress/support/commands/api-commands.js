// API specific commands
Cypress.Commands.add('apiListUsers', () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.config('baseApiUrl')}usuarios`,

    });
});

Cypress.Commands.add('apiAddUser', (testData, admin = 'false') => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.config('baseApiUrl')}usuarios`,
        body: {
            nome: testData.firstName,
            email: testData.email,
            password: testData.password,
            administrador: admin
        }
    });
});

Cypress.Commands.add('apiListProdutos', () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.config('baseApiUrl')}produtos`,
    });
});

Cypress.Commands.add('apiLogout', () => {
    return cy.request({
        method: 'POST',
        url: '/api/logout'
    });
}); 