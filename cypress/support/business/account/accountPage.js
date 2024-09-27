let btnSettings="[title=settings]"
let linkContas="//a[contains(., 'Contas')]"
let txtNomeConta="[data-test=nome]"
let btnSave = "//button[@alt='Salvar']"
let lblValidarContaSalva="//*[contains(text(), 'Conta inserida com sucesso!')]"
let typeNome=`Conta teste ${Date.now()}`
let caminho="//table//td[contains(., 'Conta teste')]/..//i[@class='far fa-edit']"
let lblValidarContaAtualizada="//*[contains(text(), 'Conta atualizada com sucesso!')]"
let typeContaRepetida="Conta mesmo nome"
let lblValidarContaRepetida="//*[contains(text(), 'Erro: Error: Request failed with status code 400')]"

class AccountPage{
    getBtnSettings(){
        return btnSettings
    }

    getLinkContas(){
return linkContas
    }

    getTxtNomeConta(){
        return txtNomeConta
    }

    getBtnSalvar(){
        return btnSave
    }
   
    getLblValidarContaSalva(){
        return lblValidarContaSalva
    }

    getTypeNome(){
        return typeNome
    }

    getCaminho(){
        return caminho
    }

getLblValidarContaAtualizada(){
return lblValidarContaAtualizada
    }

    getTypeContaRepetida(){
return typeContaRepetida
    }

    getLblValidarContaRepetida(){
        return lblValidarContaRepetida
    }
    
}
export default new AccountPage;