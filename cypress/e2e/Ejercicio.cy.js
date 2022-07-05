/// <reference types="cypress" />

describe('Product store', () => {
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/')
    
  })
  
  // Ingreso desde un archivo json
  it('Ingreso login', () => {
    cy.fixture('login').then((login) => {
      cy.get('#login2').click()
      cy.wait(1000)
      cy.get(login.user).type('pruebamiguel')
      cy.get(login.pass).type('12345')
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      cy.setCookie('user', '7a671d32-b03c-48c7-be35-3d298164795p')
      cy.get('#nameofuser').should('have.text', 'Welcome pruebamiguel')     
      cy.wait(1500)
    });
  })
   //Agragar productos al carrito
  
  it('Agregar productos', () => {
    
    //agregar primer producto el carrito
    
    cy.contains("Nokia lumia 1520").should('have.length', 1).click()
    cy.wait(1500)
    cy.get('.name').should('have.text', 'Nokia lumia 1520').wait(1000)
    cy.contains('Add to cart').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    }).wait(1500)

    
    //agregar segundo producto al carrito
    cy.get('.active > .nav-link').click().wait(1500)
    cy.contains('Laptops').click()
    cy.wait(500)
    cy.contains('2017 Dell 15.6 Inch').should('have.length', 1).click()
    cy.wait(1500)
    cy.get('.name').should('have.text', '2017 Dell 15.6 Inch').wait(500)
    cy.contains('Add to cart').click()
    
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    }).wait(1500)
    cy.contains('Cart').click(1500)
    cy.contains('Products').should('have.text', 'Products').wait(1500)
    cy.contains('Place Order').click().wait(1500)
    cy.contains('Place Order').should('have.text', 'Place Order').wait(1500)
    cy.screenshot()
  });

  it('LLenar formulario', () => {
  cy.fixture('datos').then((datos) => {
    cy.contains('Cart').click(1500)
    cy.contains('Products').should('have.text', 'Products').wait(1500)
    cy.contains('Place Order').click().wait(1500)
    cy.contains('Place Order').should('have.text', 'Place Order').wait(1500)
    cy.get(datos.name).type('Miguel')
    cy.get(datos.pais).type('Ecuador')
    cy.get(datos.cuidad).type('Cuenca')
    cy.get(datos.card).type('45254525425452')
    cy.get(datos.mes).type('12')
    cy.get(datos.year).type('25')
    cy.wait(1500)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click().wait(1500)
    cy.get('.confirm').click().wait(1500)
  });
})

})
