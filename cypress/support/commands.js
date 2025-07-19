Cypress.Commands.add('goHome', ()=>{
    cy.viewport(1920, 1080)
    cy.visit('https://playground.cyskills.com.br/login')
    cy.contains('h2', 'Faça login').should('be.visible')
})

Cypress.Commands.add('login', (email, password) =>{

    if (email) {
        cy.get('input[name=email]').type(email)
    }

    if (password) {
    cy.get('input[name=password]').type(password)
    }
    cy.get('button[type=submit]').click()
})

Cypress.Commands.add('userLoggedIn', ()=> {
    cy.get('[data-cy="welcome-title"]').should('be.visible').and('have.text', 'Boas vindas ao Cypress Playground')
})

Cypress.Commands.add('noticeHave', (text) => {
    cy.get('.notice p').should('be.visible').and('have.text', text)
  })

Cypress.Commands.add('goTo', (route, title)=>{
    cy.get(`a[href="${route}"]`).click()
    cy.contains('h2', title).should('be.visible')

})