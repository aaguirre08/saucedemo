/// <reference types="cypress" />

import inventory from '../../pages/inventoryPage';

describe('Add a product successfully', () => {
    before(() => {
        cy.visit('/')
        cy.login()
    });

    const products = [
        {
            prodName : 'Back Pack',
            prodButton : inventory.addBackPackButton,
        },
        {
            prodName : 'Bike Ligh',
            prodButton : inventory.addBikeLighButton,
        },
        {
            prodName : 'Bolt T Shirt',
            prodButton : inventory.addBoltShirtButton,
        },
        {
            prodName : 'Fleece Jacket',
            prodButton : inventory.addFleeceJacketButton,
        },
        {
            prodName : 'One Sie',
            prodButton : inventory.addOneSieButton,
        },
        {
            prodName : 'T Shirt Red',
            prodButton : inventory.addShirtRedButton,
        }
    ]

    let firtsProduct = 1
    products.forEach(product => {
        it(product.prodName, () => {
            product.prodButton().click()
            inventory.productCarNumber().should('contain', firtsProduct++)
        });        
    });

});
