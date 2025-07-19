describe ('Input Fields', ()=> {
    beforeEach(() => {
        cy.goHome()
      })

    it('Input Fields', () => {
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getDate()).padStart(2, '0');
        const dataFormatada = `${ano}-${mes}-${dia}`;

        cy.doLogin()

        cy.get('a[href="/input-fields"').click()
        cy.contains('h2', 'Input Fields').should('be.visible')

        cy.get('input#fullname').type('Fernando Papito')
        cy.get('input#email').type('papito@cyskills.com.br')
        cy.get('input#number').type('2')
        cy.get('input[type=date]').type(dataFormatada)

    })
})