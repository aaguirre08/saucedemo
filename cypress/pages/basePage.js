/// <reference types="cypress" />

class BasePage {

    constructor() {
        this.body = () => cy.get('body');
    }
    
    clickAnywhere() {
        this.body().click();
    }
}

module.exports = BasePage;
