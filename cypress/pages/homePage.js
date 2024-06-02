/// <reference types="cypress" />

const basePage = require('./basePage');

class HomePage extends basePage {

    constructor() {
        super();
        this.socialSection = () => cy.get('.social')
        this.footerCopy = () => cy.get('.footer_copy')
    }

    clickSortHilo() {
        cy.get('[data-test=product_sort_container]').trigger('click')
        cy.get('select').select('hilo', { force: true })
    }

}

module.exports = new HomePage();