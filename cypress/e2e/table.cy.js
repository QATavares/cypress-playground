describe ('Tables', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.userLoggedIn()

        cy.goTo('/tables', 'Tables')
      })

    it('Validar linha do Github', () => {
      cy.contains('table tbody tr', '1004')
        .should('be.visible')
        .and('contain', 'Github')
        .and('contain', 'papitodev')
        .and('contain', 'Ativo')
    })
    
    it('Deve remover 1 rede social', () => {
      const name = 'Facebook'

      cy.contains('table tbody tr', '1002')
        .find('.remove-item')
        .click()

      cy.contains('button', 'Excluir')
        .click()

      cy.get('table tbody')
        .should('not.contain', name)
    })

    it('Deve permancer na tabela ao desistir da exclusao', () => {
      const name = 'Youtube'

      cy.contains('table tbody tr', '1005')
        .find('.remove-item')
        .click()

      cy.contains('button', 'Cancelar')
        .click()

      cy.get('table tbody')
        .should('contain', name)
    });
})