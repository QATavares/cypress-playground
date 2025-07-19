describe ('CEP', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/cep', 'Date Picker')
      })

    it('', () => {

    })
    
})