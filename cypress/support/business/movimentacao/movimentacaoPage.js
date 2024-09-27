let linkCadastrarMovimentacao="[data-test=menu-movimentacao]"
let txtDescricao="[data-test=descricao]"
let txtValor="[data-test=valor]"
let txtInteressado="[data-test=envolvido]"
let btnStatus="[data-test=status]"
let btnSalvar=".btn-primary"
let lblMovimentacaoSucesso="//*[contains(text(), 'Movimentação inserida com sucesso!')]"

class MovimentacaoPage{
getLinkCadastrarMovimentacao(){
    return linkCadastrarMovimentacao
}

getTxtDescricao(){
    return txtDescricao
}

getTxtValor(){
    return txtValor
}

getTxtInteressado(){
    return txtInteressado
}

getBtnStatus(){
return btnStatus
}

getBtnSalvar(){
    return btnSalvar
    }
    
getLblMovimentacaoSucesso(){
return lblMovimentacaoSucesso
    }

}
export default new MovimentacaoPage;