import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import LoginLogic from '../login/loginLogic';
import loginLogic from "../login/loginLogic";


Given("que o usuário acessa o site do seubarrigareact", () => {
  LoginLogic.acessarAplicacao();
})

When('preenche o campo e-mail', () => {
  LoginLogic.preencherCampoEmail()
})

When('preenche o campo senha', () => {
  LoginLogic.preencherCampoSenha()
})

When('clica no botão entrar', () => {
  loginLogic.clicarBtnEntrar()
})

Then('uma mensagem de boas vindas é exibida', () => {
  loginLogic.validarUsuarioLogado()
})