const options = { env: { snapshotOnly: true } };
describe("List Users", options, () => {
  it("Should list users", () => {
    cy.apiListUsers().then((response) => {
      expect(response.status).to.eq(200);
      const users = response.body.usuarios.find(u => u.email === 'ivson@teste.com');
      expect(users).to.exist;
      expect(users.email).to.eq('ivson@teste.com');
    });
  });
});

describe("Add User", options, () => {
  it ("Should add a new user", () => {
    const testData = cy.generateTestData();
    cy.apiAddUser(testData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
      expect(response.body._id).to.exist();
    });
  });
});