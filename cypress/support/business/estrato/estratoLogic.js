/// <reference types="cypress" />
import EstratoPage from '../estrato/estratoPage'

class EstratoLogic{
clicarEstrato(){
    cy.get(EstratoPage.getLinkEstrato()).click()
}

clicarAlterarMovimentacao(){
cy.xpath(EstratoPage.getFnAlterar('Movimentacao 1, calculo saldo')).click()
}

validarDescricao(){
cy.get(EstratoPage.getTxtDescricao()).should('have.value', 'Movimentacao 1, calculo saldo')
}

clicarAlterarStatus(){
    cy.get(EstratoPage.getBtnAlterarStatus()).click()
    }
    
    clicarSalvar(){
        cy.get(EstratoPage.getBtnSalvar()).click()
    }

    validarAlteracaoSucesso(){
cy.xpath(EstratoPage.getLblAlteracaoSucesso()).should('visible')
    }

    clicarDeletarMovimentacao(){
cy.xpath(EstratoPage.getFnDeletar('Movimentacao para exclusao')).click()
    }

    validarRemocaoSucesso(){
        cy.xpath(EstratoPage.getLblRemocaoSucesso()).should('visible')
            }
        
}
export default new EstratoLogic;