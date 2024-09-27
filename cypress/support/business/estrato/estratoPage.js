let linkEstrato="[data-test=menu-extrato]"
let fnAlterar=conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`
let txtDescricao="[data-test=descricao]"
let btnAlterarStatus="[data-test=status]"
let btnSalvar=".btn-primary"
let lblAlteracaoSucesso="//*[contains(text(), 'Movimentação alterada com sucesso!')]"
let fnDeletar=conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`
let lblRemocaoSucesso="//*[contains(text(), 'Movimentação removida com sucesso!')]"

class EstratoPage{
getLinkEstrato(){
    return linkEstrato
}

getFnAlterar(conta){
return fnAlterar(conta)
}

getTxtDescricao(){
return txtDescricao
}

getBtnAlterarStatus(){
    return btnAlterarStatus
    }
    
getBtnSalvar(){
return btnSalvar
    }

    getLblAlteracaoSucesso(){
return lblAlteracaoSucesso
    }

    getFnDeletar(conta){
        return fnDeletar(conta)
    }

    getLblRemocaoSucesso(){
        return lblRemocaoSucesso
    }
    
}
export default new EstratoPage;