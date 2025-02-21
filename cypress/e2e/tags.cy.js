describe ('Radio Button', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/tags', 'Tags')
      })

    it('Selecionar tag', () => {
        const tags = ['Cypress', 'JavaScript', 'Nodejs']

        tags.forEach(t => {
            cy.get('.new-tag')
                .type(`${t}{Enter}`)
                .should('have.value', '')
        })

        tags.forEach(t =>{
            cy.get('.tag-input')
                .should('contain', t)
        })
    })
    
})