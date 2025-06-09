import BasePage from '../base/BasePage';

class DashboardPage extends BasePage {
    constructor() {
        super();
        this.url = '/home';
        this.selectors = {
            homeTitle: '[id="navbarTogglerDemo01"]',
            homeButton: '[data-test="home"]',
            shoppingListButton: '[data-test="lista-de-compras"]',
            cartButton: '[data-test="carrinho"]',
            logoutButton: '[data-test="logout"]',
            searchBar: '[data-test="pesquisar"]',
            searchButton: '[data-test="botaoPesquisar"]',
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

    logout() {
        this.clickElement(this.selectors.logoutButton);
        return this;
    }
}

export default DashboardPage; 