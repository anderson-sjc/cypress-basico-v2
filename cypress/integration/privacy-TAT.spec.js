/// <reference types="Cypress" />
describe('Tela de Privacidadde TAT', function() {
    it ('',function()
    {
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })
})