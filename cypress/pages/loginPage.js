/// <reference types="cypress" />

const basePage = require('./basePage');

class LoginPage extends basePage {

    constructor() {
        super();
        this.userNameInput = () => cy.get('#user-name')
        this.userPassInput = () => cy.get('#password')
        this.loginButton = () => cy.get('#login-button')
        this.errorMessage = () => cy.get('h3')
        this.closeErrorButton = () => cy.get('.error-button')
    }

    typeUserName(name){
        this.userNameInput().type(name)
    }
    typePass(password){
        this.userPassInput().type(password)
    }
    clickLogin(){
        this.loginButton().click()
    }
    clickCloseError(){
        this.closeErrorButton().click()
    }

}

module.exports = new LoginPage();
