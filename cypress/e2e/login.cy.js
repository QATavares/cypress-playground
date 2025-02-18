describe('Login', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br/login')
    cy.contains('h2', 'Faça login').should('be.visible')
  })
  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.get('[data-cy="welcome-title"]').should('be.visible')
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