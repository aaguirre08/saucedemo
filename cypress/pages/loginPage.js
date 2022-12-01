/// <reference types="cypress" />

const basePage = require('./basePage');

class LoginPage extends basePage {

    constructor() {
        super();
        this.userNameInput = () => cy.get('#user-name')
        this.userPassInput = () => cy.get('#password')
        this.loginButton = () => cy.get('#login-button')
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

}

module.exports = new LoginPage();
