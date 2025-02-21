//array usado pra garantir que o doc que foi anexado está correto, comparação feita pelo nome dele 'doc.pdf'
//
describe ('Radio Button', ()=> {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime')
        cy.userLoggedIn()

        cy.goTo('/upload', 'Upload')
      })

    it('Upload de documento', () => {
        cy.get('input[name="doc"]')
            .selectFile('cypress/fixtures/doc.pdf')
            .then(element => {
                expect(element[0].files[0].name).to.equal('doc.pdf')
            })
    })
    it.only('Upload de imagem', () =>{
        cy.get('input[name="photo"]')
            .selectFile('cypress/fixtures/liga.jpg')
            .then(element => {
                expect(element[0].files[0].name).to.equal('liga.jpg')
            })

        cy.get('#image-upload').find('img').should('be.visible').should('have.attr','src').and('include', 'blob')
    })
    
})