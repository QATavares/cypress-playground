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

  it('Não deve logar com e-mail não cadastrado', () =>{
    cy.login('www.cyskilss.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar sem o e-mail', () => {
    cy.login('', 'abc12345678')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem a senha', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem e-mail e senha', () => {
    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  });
})