describe('Utilidades para debugear con Cypress', () => {
    // it('cy.login',() => {
    // cy.visit('https://the-internet.herokuapp.com/login')
    // cy.log('Escribe el userame')
    // cy.get('#username').type('tomsmith')
    // cy.log('Describe la contraseña')
    // cy.get('#password').type('SuperSecretPassword!')
    // cy.log('Hacer clik en el boton login')
    // cy.get('form').contains('Login').click()
    // cy.url().should('contain', '/secure')
    // })
    it('cy.login',() => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.log('Escribe el userame')
        cy.get('#username').type('tomsmith')
        cy.log('Describe la contraseña')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.log('Hacer clik en el boton login')
        cy.get('form').contains('Login').click()
        
        })
})