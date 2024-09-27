#language: pt 
Funcionalidade: saldo

Contexto: realizar login
Dado que acesso o site do seubarrigareact
    Quando preencho o campo e-mail
    E preencho o campo senha
    E clico no botão entrar
    Então uma mensagem de boas vindas é exibida

Cenário: Resetar conta
Quando clico em settings
E clico em resetar conta
Então a mensagem dados resetados com sucesso é exibida

Cenário: Consultar saldo
Quando clico em home
E consulto o saldo da conta
Quando clico em estrato
E clico em alterar
E verifico a conta a ser alterada
E clico em alterar status
E clico em salvar
Então a mensagem movimentação alterada com sucesso é exibida
Quando clico em home novamente
Então consulto o saldo alterado

