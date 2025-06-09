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