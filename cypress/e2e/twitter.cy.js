/// <reference types="cypress" />

describe('test twitter', () => {
  beforeEach('Ingreso app twitter', () => {
    cy.visit('https://twitter.com/')
  })

  it('logeo', () => {
    cy.fixture('tw').then((_tw) => {
      cy.contains('Iniciar sesión').click().wait(1500)
      cy.contains('Tel').type('migueleras')
      cy.wait(1500)
      cy.contains('Siguiente').click().wait(1500)
      cy.get('.r-vhj8yc > :nth-child(1) > .r-1wbh5a2 > .r-1inkyih > .r-30o5oe').type('miguel151990')
      cy.contains('Iniciar').click().wait(1500)
      cy.get('.r-16y2uox > .css-901oao > .css-1dbjc4n').type('#Python #JavaScript ').wait(1200)
      cy.contains('Twittear').click().wait(1500)
      cy.contains('Inicio').should('have.text', 'Inicio').wait(1500)
    });
  })
    it('Cerrar sesion', () => {
      
      
    })
})