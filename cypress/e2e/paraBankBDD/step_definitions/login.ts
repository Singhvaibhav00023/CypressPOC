import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('A web browser is at the parabank login page',()=>{
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.log('Hello')
})

When('User clicks on Login',()=>{
    cy.get('[value="Log In"]').click()
})

Then('The error message "Please enter a username and password." is displayed',()=>{
    cy.get('.error').should('have.text','Please enter a username and password.')
})

When('User enters valid username & password',()=>{
    cy.get('[name="username"]').type('standard_user').type('test')
    cy.get('[name="password"]').type('standard_user').type('test@1')
})