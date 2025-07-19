describe ('Date Picker', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()

        cy.goTo('/date-picker', 'Date Picker')
      })

    it('Deve selecionar a data de nascimento', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly="readonly"]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Fevereiro')

        cy.get('input[aria-label="Year"]')
            .type('1996')

        cy.get('span[aria-label="Fevereiro 13, 1996"]')
            .click()
    })
    
})