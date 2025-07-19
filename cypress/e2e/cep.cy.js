describe ('CEP', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()

        cy.goTo('/cep', 'CEP (API dos Correios)')
      })

    it('Cadastrar endereço', () => {
      cy.get('#cep').type('05653-070')
      cy.get('button[type="submit"]').click()
    })
    
})