import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';
import loginLogic from "../login/loginLogic";


Given("que acesso o site do seubarrigareact", () => {
  LoginLogic.acessarAplicacao();
})

When('preencho o campo e-mail', () => {
  LoginLogic.preencherCampoEmail()
})

When('preencho o campo senha', () => {
  LoginLogic.preencherCampoSenha()
})

When('clico no botão entrar', () => {
  loginLogic.clicarBtnEntrar()
})

Then('uma mensagem de boas vindas é exibida', () => {
  loginLogic.validarUsuarioLogado()
})