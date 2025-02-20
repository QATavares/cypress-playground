describe ('Radio Button', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/radio', 'Radio Buttons')
      })

    it('Marcar opçoes Radio button', () => {
        cy.contains('label', 'Cypress').click()

    })

})