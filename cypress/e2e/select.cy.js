// Elemento do tipo SELECT não tem evento de click, precisa ser manipulado de uma outra maneira para que seja capturado
// ^ = expressão regular para que o cypress busque dentro do CSS algo que começe com ex: Linguagens
describe ('Radio Button', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/select', 'Select')
      })

    it('Selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
          .parent()
          .find('select')
          .select('Cypress')
    })
    it('Deve escolher as opções que usam NodeJS', () =>{

      const langs = ['JavaScript', 'TypeScript']

      cy.get('input[placeholder^="Linguagens de programação"]').click()
      
      langs.forEach(lang =>{
        cy.contains('.option-item', lang).click()
      })
    })
})