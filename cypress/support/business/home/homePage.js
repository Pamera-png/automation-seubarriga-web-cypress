let linkResetar="//a[contains(., 'Resetar')]"
let lblValidarReset="//*[contains(text(), 'Dados resetados com sucesso!')]"
let linkHome="[data-test=menu-home]"
let saldo=nome => `//td[contains(., '${nome}')]/../td[2]`

class HomePage{    
    getLinkResetar(){
        return linkResetar
            }
        
            getLblValidarReset(){
    return lblValidarReset
            }
    
getLinkHome(){
return linkHome
}

getSaldo(nome){
return saldo(nome)
}

}
export default new HomePage;