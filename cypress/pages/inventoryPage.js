/// <reference types="cypress" />

const basePage = require('./basePage');

class InventoryPage extends basePage {

    constructor() {
        super();
        this.leftMenu = () => cy.get('#react-burger-menu-btn', {timeout:6000})
        this.logOutOption = () => cy.get('a', {timeout:6000}).contains('Logout')
        this.carIcon = () => cy.get('.shopping_cart_link')
    }

    clickMenu(){
        this.leftMenu().click()
    }
    clickLogOut(){
        this.logOutOption().click()
    }
    clickCar(){
        this.carIcon().click()
    }

}

module.exports = new InventoryPage();