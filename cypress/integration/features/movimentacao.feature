#language: pt 
Funcionalidade: movimentacao

Contexto: realizar login
Dado que acesso o site do seubarrigareact
    Quando preencho o campo e-mail
    E preencho o campo senha
    E clico no botão entrar
    Então uma mensagem de boas vindas é exibida
    
Cenário: Cadastrar movimentacao
Quando clico em cadastrar movimentacao
E digito a descricao
E digito o valor
E digito o interessado
E clico em status
E clico em salvar movimentacao
Então a mensagem movimentação inserida com sucesso é exibida