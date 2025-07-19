describe ('Checkbox', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
      })

    it('Marcar as linguagens que usam node.js', () => {
        cy.goTo('/checkbox', 'Checkbox')
        cy.get('label[for="javascript"]').click()
        cy.get('label[for="typescript"]').click()

    })

    it('Marcar todas as opções', () => {
        cy.goTo('/checkbox', 'Checkbox')

        const langs = ['javascript', 'python', 'rust', 'go', 'typescript']
        langs.forEach(language => {
            cy.get(`label[for="${language}"]`).click()

        })

    })
})