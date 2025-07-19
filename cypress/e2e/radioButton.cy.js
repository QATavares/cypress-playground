describe ('Radio Button', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()

        cy.goTo('/radio', 'Radio Buttons')
      })

    it('Marcar opçoes Radio button', () => {
        cy.contains('label', 'Cypress').click()

    })

})