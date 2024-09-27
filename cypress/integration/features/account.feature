#language: pt 
Funcionalidade: account

Contexto: realizar login
Dado que acesso o site do seubarrigareact
    Quando preencho o campo e-mail
    E preencho o campo senha
    E clico no botão entrar
    Então uma mensagem de boas vindas é exibida
    Quando clico em settings
E clico em contas

Cenário: Cadastrar conta com sucesso
E digito o nome da conta
E clico em save
Então a mensagem Conta inserida com sucesso é exibida

Cenário: Alterar conta com sucesso
Dado Que clico em alterar uma conta específica
Quando limpo o campo nome da conta
E digito um novo nome
E clico em salvar
Então a mensagem conta atualizada com sucesso é exibida

Cenário: Criar conta repetida
Quando digito o nome de uma conta existente
E clico em save
Então a mensagem Request failed with status code 400 é exibida