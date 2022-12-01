/// <reference types="cypress" />

import DataFactory from '../factory/dataFactory';
import login from '../pages/loginPage';

Cypress.Commands.add('login', (fileName) => {

    const user = new DataFactory().getLoginCredentials(fileName);

    cy.visit('/')
    login.typeUserName(user.user)
    login.typePass(user.password)
    login.clickLogin()
    cy.url({timeout:90000}).should('include', '/inventory')
});
