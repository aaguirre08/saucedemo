/// <reference types="cypress" />

const basePage = require('./basePage');

class InventoryPage extends basePage {

    constructor() {
        super();
        this.leftMenu = () => cy.get('#react-burger-menu-btn', {timeout:6000})
        this.logOutOption = () => cy.get('#logout_sidebar_link')
        this.resetAppOption = () => cy.get('#reset_sidebar_link')
        this.closeLeftMenu = () => cy.get('#react-burger-cross-btn')
        this.carIcon = () => cy.get('.shopping_cart_link')
        this.addBackPackButton = () => cy.get('#add-to-cart-sauce-labs-backpack')
        this.addBikeLighButton = () => cy.get('#add-to-cart-sauce-labs-bike-light')
        this.addBoltShirtButton = () => cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
        this.addFleeceJacketButton = () => cy.get('#add-to-cart-sauce-labs-fleece-jacket')
        this.addOneSieButton = () => cy.get('#add-to-cart-sauce-labs-onesie')
        this.addShirtRedButton = () => cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
        this.removeBackPackButton = () => cy.get('#remove-sauce-labs-backpack')
        this.removeBikeLightButton = () => cy.get('#remove-sauce-labs-bike-light')
        this.removeBoltShirtButton = () => cy.get(' #remove-sauce-labs-bolt-t-shirt')
        this.removeFleeceJacketButton = () => cy.get('#remove-sauce-labs-fleece-jacket')
        this.removeOneSieButton = () => cy.get('#remove-sauce-labs-onesie')
        this.productNameLabel = () => cy.get('.inventory_item_name')
        this.sortProductButton = () => cy.get('[data-test=product_sort_container]')
        this.sortAzOption = () => cy.get('[value=az]')
        this.sortZaOption = () => cy.get('value=za]')
        this.sortLohiOption = () => cy.get('[value=lohi]')
        this.sortHiloOption = () => cy.get('[value=hilo]')
        this.productCarNumber = () => cy.get('.shopping_cart_badge')
    }

    clickMenu(){
        this.leftMenu().click()
    }
    clickLogOut(){
        this.logOutOption().click()
    }
    clickResetApp(){
        this.resetAppOption().click()
    }
    clickCloseLeftMenu(){
        this.closeLeftMenu().click()
    }
    clickCar(){
        this.carIcon().click()
    }
    clickAddBackPack(){
        this.addBackPackButton().click()
    }
    clickAddBikeLigh(){
        this.addBikeLighButton().click()
    }
    clickAddBoltShirt(){
        this.addBoltShirtButton().click()
    }
    clickAddFleeceJacket(){
        this.addFleeceJacketButton().click()
    }
    clickAddOneSie(){
        this.addOneSieButton().click()
    }
    clickAddShirtRed(){
        this.addShirtRedButton().click()
    }
    clickRemoveBackPack(){
        this.removeBackPackButton().click()
    }
    clickRemoveBikeLight(){
        this.removeBikeLightButton().click()
    }
    clickRemoveBoltShirt(){
        this.removeBoltShirtButton().click()
    }
    clickRemoveFleeceJacket(){
        this.removeFleeceJacketButton().click()
    }
    clickRemoveOneSie(){
        this.removeOneSieButton().click()
    }
    clickSortProduct(){
        this.sortProductButton().click()
    }
    clickSortAz(){
        this.sortAzOption().click()
    }
    clickSortZa(){
        this.sortZaOption().click()
    }
    clickSortLohi(){
        this.sortLohiOption().click()
    }
    clickSortHilo(){
        this.sortHiloOption().click()
    }

}

module.exports = new InventoryPage();