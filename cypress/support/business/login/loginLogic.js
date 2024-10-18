/// <reference types="Cypress" />

import loginPage from '../login/loginPage'
import LoginPage from '../login/loginPage'

class LoginLogic {
    acessarAplicacao() {
        cy.visit(Cypress.config("baseUrl"))
    }

    preencherCampoEmail() {
        cy.get(LoginPage.getTxtEmail())
            .type('emailparatestesautomacao@gmail.com')
    }

    preencherCampoSenha() {
        cy.get(LoginPage.getTxtPassword())
            .type('automacaoteste')
    }

    clicarBtnEntrar() {
        cy.xpath(LoginPage.getBtnEntrar())
            .click()
    }

    validarUsuarioLogado() {
        cy.xpath(loginPage.getLblMsgBemVindo())
            .should('visible')
    }
}

export default new LoginLogic;