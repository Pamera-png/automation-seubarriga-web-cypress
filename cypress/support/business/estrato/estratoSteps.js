import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import EstratoLogic from '../estrato/estratoLogic';

When('clico em estrato', ()=>{
EstratoLogic.clicarEstrato()
})

And('clico em alterar', () =>{
EstratoLogic.clicarAlterarMovimentacao()
})

And('verifico a conta a ser alterada', ()=>{
EstratoLogic.validarDescricao()
})

And('clico em alterar status', ()=>{
EstratoLogic.clicarAlterarStatus()
})

And('clico em salvar', ()=>{
EstratoLogic.clicarSalvar()
})

Then('a mensagem movimentação alterada com sucesso é exibida', ()=>{
EstratoLogic.validarAlteracaoSucesso()
})

And('clico em deletar movimentação', ()=>{
EstratoLogic.clicarDeletarMovimentacao()
})

When('a mensagem movimentação removida com sucesso é exibida', ()=>{
EstratoLogic.validarRemocaoSucesso()
})