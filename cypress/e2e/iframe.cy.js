describe ('iframe', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/iframe', 'IFrame')
      })

    it('', () => {

    })
    
})