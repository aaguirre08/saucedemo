/// <reference types="cypress" />

const basePage = require('./basePage');

class CheckoutPage extends basePage {

    constructor() {
        super();
        this.nameInput = () => cy.get('#first-name')
        this.lasNameInput = () => cy.get('#last-name')
        this.postalCodeInput = () => cy.get('#postal-code')
        this.checkoutButton = () => cy.get('#checkout')
    }

    typeName(name){
        this.nameInput().type(name)
    }
    typeLastName(lastName){
        this.lasNameInput().type(lastName)
    }
    typePostalCode(postalCode){
        this.postalCodeInput().type(postalCode)
    }
    clickCheckout(){
        this.checkoutButton().click()
    }

}

module.exports = new CheckoutPage();