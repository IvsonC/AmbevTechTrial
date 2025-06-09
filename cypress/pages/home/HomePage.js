import BasePage from '../base/BasePage';

class DashboardPage extends BasePage {
    constructor() {
        super();
        this.url = '/home';
        this.selectors = {
            homeTitle: '[id="navbarTogglerDemo01"]',
            homeButton: '[data-testid="home"]',
            shoppingListButton: '[data-testid="lista-de-compras"]',
            cartButton: '[data-testid="carrinho"]',
            logoutButton: '[data-testid="logout"]',
            searchBar: '[data-testid="pesquisar"]',
            searchButton: '[data-testid="botaoPesquisar"]',
            searchResults: '[data-testid="product-detail-link"]',
            addProductToListButton: '[data-testid="adicionarNaLista"]',
            addToCart: '[data-testid="adicionar carrinho"]',
            clearListButton: '[data-testid="limparLista"]',
        };
    }

    verifyHomeElements() {
        this.verifyElementVisible(this.selectors.homeTitle);
        this.verifyElementVisible(this.selectors.homeButton);
        this.verifyElementVisible(this.selectors.shoppingListButton);
        this.verifyElementVisible(this.selectors.cartButton);
        this.verifyElementVisible(this.selectors.logoutButton);
        return this;
    }

    searchForProduct(productName) {
        this.typeText(this.selectors.searchBar, productName);
        this.clickElement(this.selectors.searchButton);
        return this;
    }

    verifySearchResults() {
        this.verifyElementVisible(this.selectors.searchResults);
        return this;
    }

    addProductToList() {
        this.clickElement(this.selectors.addProductToListButton);
        return this;
    }

    addToCart() {
        this.clickElement(this.selectors.addToCart);
        return this;
    }

    clearList() {
        this.clickElement(this.selectors.clearListButton);
        return this;
    }

    logout() {
        this.clickElement(this.selectors.logoutButton);
        return this;
    }
}

export default DashboardPage; 