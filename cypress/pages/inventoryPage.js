/// <reference types="cypress" />

const basePage = require('./basePage');

class InventoryPage extends basePage {

    constructor() {
        super();
        this.leftMenu = () => cy.get('#react-burger-menu-btn')
        this.logOutOption = () => cy.get('#logout_sidebar_link')
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