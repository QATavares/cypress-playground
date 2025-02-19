describe ('Input Fields', ()=> {
    beforeEach(() => {
        cy.goHome()
      })

    it('Textarea', () => {
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.get('a[href="/textarea"').click()
        cy.contains('h2', 'Textarea').should('be.visible')

        cy.get('textarea[name=message]').type("'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
    })
})