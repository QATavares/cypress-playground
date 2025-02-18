describe('Login', () => {
  beforeEach(() => {
    cy.goHome()
  })
  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve efetuar login Email invalido', () => {
    cy.login('papit0@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })

  it('Não deve efetuar login Senha invalida', () => {
    cy.login('papito@cyskills.com.br', 'dhowtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')

  })
})