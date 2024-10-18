#language: pt 
Funcionalidade: login 
    Cenário: Realizar login com sucesso
        Dado que acesso o site do seubarrigareact
    Quando preencho o campo e-mail
    E preencho o campo senha
    E clico no botão entrar
    Então uma mensagem de boas vindas é exibida