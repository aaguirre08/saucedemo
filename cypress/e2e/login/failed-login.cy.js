/// <reference types="cypress" />

import login from '../../pages/loginPage';

describe('Unsuccessful login', () => {

    before(() => {
        cy.visit('/')
    });

    const userInfo = [
        {
            user: 'locked_out_user',
            password: 'secret_sauce'
        },
        {
            user: 'performance_glitch_user',
            password: 'secret_sauce'
        },
        {
            user: 'problem_user',
            password: 'secret_sauce'
        },
        {
            user: 'standard_user',
            password: 'secret_sauce'
        }
    ]

    it('Incorrect password', () => {
        userInfo.forEach(info => {
            login.typeUserName(info.user)
            login.typePass(info.password.split('').reverse().join(''))
            login.clickLogin()
            login.errorMessage().should('exist').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
            login.userNameInput().clear()
            login.userPassInput().clear()
            login.clickCloseError()
        });
    });

    it('Incorrect user', () => {
        userInfo.forEach(info => {
            login.typeUserName(info.user.split('').reverse().join(''))
            login.typePass(info.password)
            login.clickLogin()
            login.errorMessage().should('exist').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
            login.userNameInput().clear()
            login.userPassInput().clear()
            login.clickCloseError()
        });
    });

    it('Incorrect password and user', () => {
        userInfo.forEach(info => {
            login.typeUserName(info.user.split('').reverse().join(''))
            login.typePass(info.password.split('').reverse().join(''))
            login.clickLogin()
            login.errorMessage().should('exist').and('have.text', 'Epic sadface: Username and password do not match any user in this service')
            login.userNameInput().clear()
            login.userPassInput().clear()
            login.clickCloseError()
        });
    });

    it('User blocked', () => {
        login.typeUserName('locked_out_user')
        login.typePass('secret_sauce')
        login.clickLogin()
        login.errorMessage().should('exist').and('have.text', 'Epic sadface: Sorry, this user has been locked out.')
        login.userNameInput().clear()
        login.userPassInput().clear()
        login.clickCloseError()
    });
});