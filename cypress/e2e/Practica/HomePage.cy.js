describe('Home de www.freerangetesters.com', () => {
    
    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
    })

    //prrueba de encontar el titulo de la paginma web
    it('Valida que tiene un titulo', () => {
        cy.title().should('include', 'Free Range Testers')
        cy.get('#comp-l02x1m8d2label').click()
        cy.xpath('//*[@id="comp-l02x1m8d3label"]').click()
        cy.contains('Iniciar Sesión').click()
    })

    it('Hay 8 cursos con el boton ver mas', () => {
        cy.contains('Cursos').click()
        cy.get('[data-testid="linkElement"] > ._1Qjd7').should('have.length', 8)   
    })

    it('El campo nombre del formulario posse clase _1SOvY has-custom-focus', () => {
        cy.get('#input_comp-l1ed927d').should('have.class', '_1SOvY has-custom-focus')
    })

    it('Verificar que hay un link llamado blog en la barra de navegación', () => {
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog')
    })

    it('Existe un botón de Empezá a Aprender en el home', () => {
        cy.get('#comp-krjarw4p > [data-testid="linkElement"]').should('be.visible')
    })
}) 