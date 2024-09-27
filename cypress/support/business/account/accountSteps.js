import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import AccountLogic from '../account/accountLogic';

When('clico em settings', ()=>{
AccountLogic.clicarSettings()
})

And('clico em contas', () =>{
AccountLogic.clicarAccounts()
})

And('digito o nome da conta', ()=>{
AccountLogic.inserirNomeConta()
})

And('clico em save', ()=>{
AccountLogic.clicarSalvar()
})

Then('a mensagem Conta inserida com sucesso é exibida',()=>{
AccountLogic.validarContaSalva()
})

Given('Que clico em alterar uma conta específica', () => {
AccountLogic.clicarAtualizar()
})

When('limpo o campo nome da conta', ()=>{
AccountLogic.limparNome()
})

When('digito um novo nome', ()=>{
AccountLogic.digitarNovoNome()
})

When('clico em salvar', ()=>{
AccountLogic.clicarSalvar()
})

Then('a mensagem conta atualizada com sucesso é exibida', ()=>{
AccountLogic.validarContaAtualizada()
})

When('digito o nome de uma conta existente', ()=>{
AccountLogic.digitarContaRepetida()
})

And('clico em save', ()=>{
    AccountLogic.clicarSalvar()
})

Then('a mensagem Request failed with status code 400 é exibida', ()=>{
AccountLogic.validarContaRepetida()
})