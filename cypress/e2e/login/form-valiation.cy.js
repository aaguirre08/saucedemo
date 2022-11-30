/// <reference types="cypress" />

import login from '../../pages/loginPage';

context('Form validations', () => {

    const user = 'standard_user'
    const password = 'secret_sauce'

    before(() => {
        cy.visit('/')
    });

    describe('Incomplete form error messages', () => {

        afterEach(() => {
            login.userNameInput().clear()
            login.userPassInput().clear()
            login.clickCloseError()
        });

        it('Form without user', () => {
            login.typeUserName(user)
            login.typePass('{backspace}')
            login.clickLogin()
            login.errorMessage().should('exist').and('have.text', 'Epic sadface: Password is required')
        });

        it('Form without password', () => {
            login.typeUserName('{backspace}')
            login.typePass(password)
            login.clickLogin()
            login.errorMessage().should('exist').and('have.text', 'Epic sadface: Username is required')
        });
    });

    describe('Elements in red due to errors', () => {
        
        afterEach(() => {
            login.userNameInput().clear()
            login.userPassInput().clear()
            login.clickCloseError()
        });

        const scenarios = [
            {
                scenario: 'Incorrect user',
                name: user.split('').reverse().join(''),
                pass: password
            },
            {
                scenario: 'Incorrect password',
                name: user,
                pass: password.split('').reverse().join('')   
            },
            {
                scenario: 'No user',
                name: '{backspace}',
                pass: password 
            },
            {
                scenario: 'No password',
                name: user,
                pass: '{backspace}'
            }
        ]

        scenarios.forEach(testCase => {
            it(testCase.scenario, () => {
                login.typeUserName(testCase.name)
                login.typePass(testCase.pass)
                login.clickLogin()
                login.userNameInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)')
                login.userPassInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)')
            });
        });

    });

    it('Form elements', () => {
        login.userNameInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Username')
        login.userPassInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Password')
        login.loginButton()
            .invoke('attr', 'value')
            .should('equal', 'Login')
    });

});
