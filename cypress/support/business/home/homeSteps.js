import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps"
import HomeLogic from '../home/homeLogic';

And('clico em resetar conta', ()=>{
    HomeLogic.clicarResetar()
    })
    
    Then('a mensagem dados resetados com sucesso é exibida', ()=>{
    HomeLogic.validarReset()
    })
    
When('clico em home', () => {
HomeLogic.clicarHome()
})

And('consulto o saldo da conta', ()=>{
HomeLogic.consultarSaldo()
})

When('clico em home novamente', () =>{
    HomeLogic.clicarHome()
})

Then('consulto o saldo alterado',()=>{
HomeLogic.consultarSaldoAtualizado()
})
