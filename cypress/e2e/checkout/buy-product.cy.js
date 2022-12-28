/// <reference types="cypress" />

const { faker } = require ("@faker-js/faker/locale/es_MX")
import checkout from '../../pages/checkoutPage'
import inventory from '../../pages/inventoryPage'

context('Successful purchases', () => {

    before(() => {
        cy.login()
    });

    const products = [
        {
            prodName : 'Sauce Labs Backpack',
            addButton : inventory.addBackPackButton
        },
        {
            prodName : 'Sauce Labs Bike Light',
            addButton : inventory.addBikeLighButton
        },
        {
            prodName : 'Sauce Labs Bolt T-Shirt',
            addButton : inventory.addBoltShirtButton
        },
        {
            prodName : 'Sauce Labs Fleece Jacket',
            addButton : inventory.addFleeceJacketButton
        },
        {
            prodName : 'Sauce Labs Onesie',
            addButton : inventory.addOneSieButton
        },
        {
            prodName : 'Test.allTheThings() T-Shirt (Red)',
            addButton : inventory.addShirtRedButton
        }
    ]

    products.forEach(product => {
        it('Buying a ' + product.prodName, () => {
            product.addButton().click()
            inventory.clickCar()
            checkout.clickCheckout()
            checkout.typeName(faker.name.firstName())
            checkout.typeLastName(faker.name.lastName())
            checkout.typePostalCode(faker.address.zipCode())
            checkout.clickContinue()
            cy.url().should('contain', 'checkout-step-two')
            inventory.productNameLabel().should('be.visible').and('have.text', product.prodName)
            checkout.clickFinishCheckoutButton()
            cy.url().should('contain', 'checkout-complete')
            cy.get('h2').should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
            cy.get('.pony_express').should('be.visible')
        });
    });

    afterEach(() => {
        cy.get('#back-to-products').click()
    });

});