///<reference types="cypress"/>
import AccountPage from '../account/accountPage'

class AccountLogic{
    clicarSettings(){
        cy.get(AccountPage.getBtnSettings()).click()
    }

    clicarAccounts(){
        cy.xpath(AccountPage.getLinkContas()).click()
    }

    inserirNomeConta(){
cy.get(AccountPage.getTxtNomeConta())
.type(AccountPage.getTypeNome())
    }

    clicarSalvar(){
        cy.xpath(AccountPage.getBtnSalvar()).click()
    }
    
    validarContaSalva(){
        cy.xpath(AccountPage.getLblValidarContaSalva()).should('visible')
    }

    clicarAtualizar(){
cy.xpath(AccountPage.getCaminho()).click()
    }

limparNome(){
    cy.get(AccountPage.getTxtNomeConta()).clear()
}    

digitarNovoNome(){
    cy.get(AccountPage.getTxtNomeConta())
.type(`Pamera ${Date.now()}`)
}    

validarContaAtualizada(){
    cy.xpath(AccountPage.getLblValidarContaAtualizada()).should('visible')
}

digitarContaRepetida(){
    cy.get(AccountPage.getTxtNomeConta())
    .type(AccountPage.getTypeContaRepetida())
}

validarContaRepetida(){
    cy.xpath(AccountPage.getLblValidarContaRepetida()).should('visible')
}

}

export default new AccountLogic;