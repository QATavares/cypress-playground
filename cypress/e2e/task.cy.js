describe ('Task Board', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/taks', 'Task Board')
      })

    it('', () => {

    })
    
})