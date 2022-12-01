/// <reference types="cypress" />

class BasePage {

    constructor() {
        this.body = () => cy.get('body')
        this.continueButton = () => cy.get('#continue')
        this.cancelButton = () => cy.get('#cancel')
        this.errorMessage = () => cy.get('h3')
        this.closeErrorButton = () => cy.get('.error-button')
    }
    
    clickAnywhere() {
        this.body().click()
    }
    clickContinue() {
        this.continueButton().click()
    }
    clickCancel() {
        this.cancelButton().click()
    }
    clickCloseError(){
        this.closeErrorButton().click()
    }
}

module.exports = BasePage;
