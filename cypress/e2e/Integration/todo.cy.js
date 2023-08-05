
describe('The first ToDo test suite', () => {
    it.only('Add ToDo', () => {
        cy.visit(`${Cypress.env('baseUrl')}`)
        cy.get('.new-todo').type("Learn Cypress{enter}")
        cy.get('.new-todo').type("Write Cypress automation cases{enter}")
        cy.get('.todo-count').should('have.text',"2 items left")
    })

})