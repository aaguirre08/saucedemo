/// <reference types="cypress" />

const { faker } = require ("@faker-js/faker/locale/es_MX")
import checkout from '../../pages/checkoutPage'
import inventory from '../../pages/inventoryPage'

context('Form vaidation', () => {

    before(() => {
        cy.login()
        inventory.clickCar()
        checkout.clickCheckout()
    });

    describe('Mandatory fields', () => {
        
        const scenarios = [
            {
                scenario: 'No name',
                name: '{backspace}',
                lastname: faker.name.lastName(),
                zipcode: faker.address.zipCode(),
                error: 'Error: First Name is required'
            },
            {
                scenario: 'No last name',
                name: faker.name.firstName(),
                lastname: '{backspace}',
                zipcode: faker.address.zipCode(),
                error: 'Error: Last Name is required'
            },
            {
                scenario: 'No postal code',
                name: faker.name.firstName(),
                lastname: faker.name.lastName(),
                zipcode: '{backspace}',
                error: 'Error: Postal Code is required'
            },
            {
                scenario: 'No information',
                name: '{backspace}',
                lastname: '{backspace}',
                zipcode: '{backspace}',
                error: 'Error: First Name is required'
            }
        ]

        afterEach(() => {
            checkout.nameInput().clear()
            checkout.lasNameInput().clear()
            checkout.postalCodeInput().clear()
            checkout.clickCloseError()
        });

        scenarios.forEach(testCase => {
            it(testCase.scenario, () => {
                checkout.typeName(testCase.name)
                checkout.typeLastName(testCase.lastname)
                checkout.typePostalCode(testCase.zipcode)
                checkout.clickContinue()
                checkout.errorMessage().should('exist').and('have.text', testCase.error)
            });
        });

    });

    describe('Colors in the fields', () => {
        
        const scenarios = [
            {
                scenario: 'No name',
                name: '{backspace}',
                lastname: faker.name.lastName(),
                zipcode: faker.address.zipCode(),
                error: 'Error: First Name is required'
            },
            {
                scenario: 'No last name',
                name: faker.name.firstName(),
                lastname: '{backspace}',
                zipcode: faker.address.zipCode(),
                error: 'Error: Last Name is required'
            },
            {
                scenario: 'No postal code',
                name: faker.name.firstName(),
                lastname: faker.name.lastName(),
                zipcode: '{backspace}',
                error: 'Error: Postal Code is required'
            },
            {
                scenario: 'No information',
                name: '{backspace}',
                lastname: '{backspace}',
                zipcode: '{backspace}',
                error: 'Error: First Name is required'
            }
        ]

        afterEach(() => {
            checkout.nameInput().clear()
            checkout.lasNameInput().clear()
            checkout.postalCodeInput().clear()
            checkout.clickCloseError()
        });

        scenarios.forEach(testCase => {
            it(testCase.scenario, () => {
                checkout.typeName(testCase.name)
                checkout.typeLastName(testCase.lastname)
                checkout.typePostalCode(testCase.zipcode)
                checkout.clickContinue()
                checkout.nameInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)')
                checkout.lasNameInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)')
                checkout.postalCodeInput().should('have.css', 'border-bottom-color', 'rgb(226, 35, 26)')
            });
        });

    });

    it('Initial structure', () => {
        checkout.nameInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'First Name')
        checkout.lasNameInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Last Name')
        checkout.postalCodeInput()
            .invoke('attr', 'placeholder')
            .should('equal', 'Zip/Postal Code')
    });

});