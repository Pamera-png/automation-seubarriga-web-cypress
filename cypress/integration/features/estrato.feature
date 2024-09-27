#language: pt 
Funcionalidade: estrato

Contexto: realizar login e resetar conta
Dado que acesso o site do seubarrigareact
    Quando preencho o campo e-mail
    E preencho o campo senha
    E clico no botão entrar
    Então uma mensagem de boas vindas é exibida
Quando clico em settings
E clico em resetar conta
Então a mensagem dados resetados com sucesso é exibida

Cenário: Alterar movimentacao
Quando clico em estrato
E clico em alterar
E verifico a conta a ser alterada
E clico em alterar status
E clico em salvar
Então a mensagem movimentação alterada com sucesso é exibida


Cenário: Remover movimentacao
Quando clico em estrato
E clico em deletar movimentação
Então a mensagem movimentação removida com sucesso é exibida