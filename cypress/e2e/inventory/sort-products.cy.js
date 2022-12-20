/// <reference types="cypress" />

import inventory from '../../pages/inventoryPage';

describe('Sorting products', () => {
    before(() => {
        cy.visit('/')
        cy.login()
    });

    const sortName = [
        {
            sortN : 'Name (A to Z)',
            prodButton : inventory.clickSortAz,
            fristProduct : 'Sauce Labs Backpack'
        },
        {
            sortN : 'Name (Z to A)',
            prodButton : inventory.clickSortZa,
            fristProduct : 'Test.allTheThings() T-Shirt (Red)' 
        }
    ]

    describe('By name', () => {
        sortName.forEach(product => {
            it(product.sortN, () => {
                product.prodButton()
                cy.get('.inventory_item:nth-of-type(1) .inventory_item_name').should('contain', product.fristProduct)
            });        
        });      
    });

    const sortPrice = [
        {
            sortN : 'Price (low to high)',
            prodButton : inventory.clickSortLohi,
            fristProduct : '7.99'
        },
        {
            sortN : 'Price (high to low)',
            prodButton : inventory.clickSortHilo,
            fristProduct : '49.99' 
        }
    ]

    describe('By Price', () => {
        sortPrice.forEach(product => {
            it(product.sortN, () => {
                product.prodButton()
                cy.get('.inventory_item:nth-of-type(1) .inventory_item_price').should('contain', '$' + product.fristProduct)
            });        
        });      
    });

});
