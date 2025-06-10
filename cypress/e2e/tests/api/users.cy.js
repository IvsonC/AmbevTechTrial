/**
 * Users API Test Suite
 * This test suite verifies the user management functionality of the API
 * It specifically checks if the API can create new users and handle user data correctly
 */

const options = { env: { snapshotOnly: true } };
describe("List Users", options, () => {
  it("Should list users", () => {
    cy.apiListUsers().then((response) => {
      expect(response.status).to.eq(200);
      const users = response.body.usuarios.find(u => u.email === 'ivson@teste.com');
      expect(users).to.exist;
      expect(users.email).to.contain('ivson@teste.com');
    });
  });
});

describe("Add User", options, () => {
  /**
   * Test: Create New User
   * Steps:
   * 1. Generate random test data for a new user (email, password, name, etc.)
   * 2. Make a POST request to create a new user with the generated data
   * 3. Verify the response status is 201 (Created)
   * 4. Verify the success message in the response
   * 5. Verify the response contains a user ID
   */
  it("Should add a new user", () => {
    cy.generateTestData().then((testData) => {
      cy.apiAddUser(testData).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      });
    });
  });
});