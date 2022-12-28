/// <reference types="cypress" />

import inventory from '../../pages/inventoryPage';

describe('Delete a product successfully', () => {
    before(() => {
        cy.visit('/')
        cy.login()
    });

    const products = [
        {
            prodName : 'Back Pack',
            addButton : inventory.addBackPackButton,
            deleteButton : inventory.removeBackPackButton
        },
        {
            prodName : 'Bike Ligh',
            addButton : inventory.addBikeLighButton,
            deleteButton : inventory.removeBikeLightButton
        },
        {
            prodName : 'Bolt T Shirt',
            addButton : inventory.addBoltShirtButton,
            deleteButton : inventory.removeBoltShirtButton
        },
        {
            prodName : 'Fleece Jacket',
            addButton : inventory.addFleeceJacketButton,
            deleteButton : inventory.removeFleeceJacketButton
        },
        {
            prodName : 'One Sie',
            addButton : inventory.addOneSieButton,
            deleteButton : inventory.removeOneSieButton
        },
        {
            prodName : 'T Shirt Red',
            addButton : inventory.addShirtRedButton,
            deleteButton : inventory.removeRedTShirtButton
        }
    ]

    products.forEach(product => {
        it('Deleting ' + product.prodName, () => {
            product.addButton().click()
            inventory.productCarNumber().should('contain', '1')
            product.deleteButton().should('be.visible').and('have.text', 'Remove')
            product.deleteButton().click()
            product.deleteButton().should('not.exist')
        });
    });    

});
