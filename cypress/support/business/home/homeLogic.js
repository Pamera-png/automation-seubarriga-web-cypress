/// <reference types="cypress" />
import HomePage from '../home/homePage'

class HomeLogic{
    clicarResetar(){
        cy.xpath(HomePage.getLinkResetar()).click()
            }
        
            validarReset(){
    cy.xpath(HomePage.getLblValidarReset()).should('visible')
            }
        
clicarHome(){
    cy.get(HomePage.getLinkHome()).click()
}

consultarSaldo(){
    cy.xpath(HomePage.getSaldo('Conta para saldo')).should('contain', '4.034,00')
}

consultarSaldoAtualizado(){
    cy.xpath(HomePage.getSaldo('Conta para saldo')).should('contain', '534,00')
}

}
export default new HomeLogic;