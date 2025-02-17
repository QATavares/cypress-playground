describe('Login', () => {
  it('Deve logar com sucesso', () => {
    //Mudar o tamanho da resolução da tela
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br/login')

    cy.get('input[name=email]').type('papito@cyskills.com.br')
    cy.get('input[name=password]').type('showtime')
    cy.get('button[type=submit]').click()

    cy.get('[data-cy="welcome-title"]').should('be.visible')
  })

  it('Não deve efetuar login Email invalido', () => {
    cy.visit('https://playground.cyskills.com.br/login')

    cy.get('input[name=email]').type('pap1to@cyskills.com.br')
    cy.get('input[name=password]').type('showtime')
    cy.get('button[type=submit]').click()

    cy.get('.notice p').should('be.visible').and('have.text', 'E-mail ou senha incorretos. Por favor, tente novamente!')  
  })

  it('Não deve efetuar login Senha invalida', () => {
    cy.visit('https://playground.cyskills.com.br/login')

    cy.get('input[name=email]').type('papito@cyskills.com.br')
    cy.get('input[name=password]').type('Showtime')
    cy.get('button[type=submit]').click()

    cy.get('[data-cy="welcome-title"]').should('be.visible') 
  })
})

