const options = { env: { snapshotOnly: true } };
describe("List Produtos", options, () => {
  it("Should list produtos", () => {
    cy.apiListProdutos().then((response) => {
      expect(response.status).to.eq(200);
      const produtos = response.body.produtos.find(p => p.nome.includes('Logitech MX'));
      expect(produtos).to.exist;
      expect(produtos.nome).to.contain('Logitech MX');
    });
  });
});