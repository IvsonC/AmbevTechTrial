const options = { env: { snapshotOnly: true } };
describe("List Produtos", options, () => {
  /**
   * Test: List Products and Find Specific Product
   * This test:
   * 1. Makes an API call to list all products
   * 2. Verifies the response status is 200 (success)
   * 3. Searches for a specific product (Logitech MX)
   * 4. Verifies the product exists and contains the expected name
   */
  it("Should list produtos", () => {
    cy.apiListProdutos().then((response) => {
      expect(response.status).to.eq(200);
      const produtos = response.body.produtos.find(p => p.nome.includes('Logitech MX'));
      expect(produtos).to.exist;
      expect(produtos.nome).to.contain('Logitech MX');
    });
  });
});