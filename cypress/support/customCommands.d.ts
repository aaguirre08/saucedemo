declare namespace Cypress {
    interface Chainable<Subject> {

        /**
        * Custom command that let you to log in using UI.
        * If no param is passed the user session is created with default fixture file info.
        * 
        * @param {string} fileName - The name of the file where the credentials are stored.
        * @example 
        * cy.login()
        * cy.login('file name')
        */
         login(fileName: string): Chainable<any>
        }
    }