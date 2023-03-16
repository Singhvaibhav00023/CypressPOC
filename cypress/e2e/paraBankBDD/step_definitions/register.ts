import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
// Register
Given('A web browser is at the parabank register page',()=>{
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
})

When('User enter the required details for registration',()=>{
        cy.get('[id*="firstName"]').type('Vaibhav')
        cy.get('[id*="lastName"]').type('Singh')
        cy.get('[id*="street"]').type('xyz')
        cy.get('[id*="city"]').type('testcity')
        cy.get('[id*="state"]').type('UP')
        cy.get('[id*="zipCode"]').type('201001')
        cy.get('[id*="phone"]').type('987654321')
        cy.get('[id*="ssn"]').type('1234')
        cy.get('[id*="username"]').type('test')
        cy.get('[id*="password"]').type('test@1')
        cy.get('[id*="Password"]').type('test@1')
})

When('User clicks on the register button',()=>{
    cy.get('[value="Register"]').click()
})

Then('The successful message "Your account was created successfully. You are now logged in." should be displayed',()=>{
    cy.get('#rightPanel > p').should('have.text','Your account was created successfully. You are now logged in.')
})

Then('The total 10 errors should be displayed',()=>{
    cy.get('[id*=errors]').should('have.length',10)
})

When('User enter the required details of existing user for registration',()=>{
    cy.get('[id*="firstName"]').type('Vaibhav')
    cy.get('[id*="lastName"]').type('Singh')
    cy.get('[id*="street"]').type('xyz')
    cy.get('[id*="city"]').type('testcity')
    cy.get('[id*="state"]').type('UP')
    cy.get('[id*="zipCode"]').type('201001')
    cy.get('[id*="phone"]').type('987654321')
    cy.get('[id*="ssn"]').type('1234')
    cy.get('[id*="username"]').type('test')
    cy.get('[id*="password"]').type('test@1')
    cy.get('[id*="Password"]').type('test@1')
})

Then('The error message "This username already exists." should be displayed',()=>{
    cy.get('[id*="username.errors"]').should('have.text','This username already exists.')
})