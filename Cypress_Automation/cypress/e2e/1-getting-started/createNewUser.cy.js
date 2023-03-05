import {faker} from '@faker-js/faker';
const  firstname = faker.name.firstName()
const  lastname = faker.name.lastName()
const  email = faker.internet.email()


describe('Create New Account', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span').click()
    })

    it('Verify that new user account cannot be created without firstname', () => {
        //cy.get('#firstname').type('Mariatou')
        cy.get('#lastname').type('Touray')
        cy.get('#email_address').type('mariatou@gmail.com')
        cy.get('#password').type('Mariatou@123')
        cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')

    })
    it('Verify that new user account cannot be created without lastname', () => {

        cy.get('#firstname').type('Mariatou')
        //cy.get('#lastname').type('Touray')
        cy.get('#email_address').type('mariatou@gmail.com')
        cy.get('#password').type('Mariatou@123')
        cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
    })

it('Verify that new user account cannot be created without email', () => {

        cy.get('#firstname').type('Mariatou')
        cy.get('#lastname').type('Touray')
        //cy.get('#email_address').type('mariatou@gmail.com')
        cy.get('#password').type('Mariatou@123')
        cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
        cy.get('#email_address-error').should('have.text', 'This is a required field.')
})
    it('Verify that new user account cannot be created without password', () => {

        cy.get('#firstname').type('Mariatou')
        cy.get('#lastname').type('Touray')
        cy.get('#email_address').type('mariatou@gmail.com')
       // cy.get('#password').type('Mariatou@123')
        cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#password-error').should('have.text', 'This is a required field.')
    })

    it('Verify that new user account cannot be created without password confirmation', () => {
        cy.get('#firstname').type('Mariatou')
        cy.get('#lastname').type('Touray')
        cy.get('#email_address').type('mariatou@gmail.com')
        cy.get('#password').type('Mariatou@123')
        //cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
    })


    it.only('Verify that new user can create new account', () => {
        cy.get('#firstname').type(firstname)
        cy.get('#lastname').type(lastname)
        cy.get('#email_address').type(email)
        cy.get('#password').type('Mariatou@123')
        cy.get('#password-confirmation').type('Mariatou@123')
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
        cy.get('.message-success').should('have.text', 'Thank you for registering with Fake Online Clothing Store.')
        cy.wait(9000)
    })
})