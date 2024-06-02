/// <reference types="cypress" />

import home from '../../pages/homePage';

describe('Verify footer structure', () => {
    before(() => {
        cy.login()
    });

    const socialIcon = 'li.social_'
    const social_media = [
        {
            social_name: 'Facebook'
        },
        {
            social_name: 'Twitter'
        },
        {
            social_name: 'LinkedIn'
        }
    ]

    social_media.forEach(social => {
        it('The user is able to see: ' + social.social_name, () => {
            cy.get(socialIcon + social.social_name.toLocaleLowerCase()).should('be.visible')
        });
    });

    it('The user is able to see the copy', () => {
        home.footerCopy().should('be.visible').and('have.text', '© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    });

    it('Click on social media icons: ' + social.social_name, () => {
        });

    });
});