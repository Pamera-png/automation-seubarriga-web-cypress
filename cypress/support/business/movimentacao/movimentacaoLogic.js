/// <reference types="cypress" />
import MovimentacaoPage from '../movimentacao/movimentacaoPage'
class MovimentacaoLogic{
cadastrarMovimentacao(){
    cy.get(MovimentacaoPage.getLinkCadastrarMovimentacao()).click()
}

digitarDescricao(){
    cy.get(MovimentacaoPage.getTxtDescricao()).type('Pagamento aluguel')
}

digitarValor(){
cy.get(MovimentacaoPage.getTxtValor()).type('1200,00')
}

digitarInteressado(){
cy.get(MovimentacaoPage.getTxtInteressado()).type('Pamera Rozembra')
}

clicarStatus(){
cy.get(MovimentacaoPage.getBtnStatus()).click()
}

clicarSalvar(){
    cy.get(MovimentacaoPage.getBtnSalvar()).click()
}

validarMovimentacaoSucesso(){
    cy.xpath(MovimentacaoPage.getLblMovimentacaoSucesso()).should('visible')
}
}
export default new MovimentacaoLogic;