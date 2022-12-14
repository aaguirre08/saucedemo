/// <reference types="cypress" />

import login from '../../pages/loginPage';
import inventory from '../../pages/inventoryPage';

describe('Successful logout', () => {

    before(() => {
        cy.visit('/')
    });

    const userInfo = [
        {
            scenario: 'Performance User',
            user: 'performance_glitch_user'
        },
        {
            scenario: 'Problem User',
            user: 'problem_user'
        },
        {
            scenario: 'Standard User',
            user: 'standard_user'
        }
    ]

    userInfo.forEach(testCase => {
        it(testCase.scenario, () => {
            login.typeUserName(testCase.user)
            login.typePass('secret_sauce')
            login.clickLogin()
            cy.url({timeout:60000}).should('include', '/inventory')
            inventory.clickMenu()
            inventory.clickLogOut()
            cy.url().should('eq', Cypress.config().baseUrl + '/')
        });
    });
});