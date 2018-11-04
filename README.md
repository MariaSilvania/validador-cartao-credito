# Validador de cartao de credito v.1.0.0

**Esta biblioteca se destina à validar o cartao de credito, para uso em aplicações web.**
Na versão atual é capaz de identificar se o cartao de credito é válido.


## Os método utilizado na biblioteca:

#### **cardValidator(number);**

Exemplo de uso:

```
$node
> let validarCartao = require("valid-cart-cred")
> validarCartao("5255588327612409"); //true
```


## versão 1.0.0

- funcionalidades: valida se o cartao de credito é valido;
- valida se não foi informado o paramento para a validaçao.



## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install valid-cart-cred`


## roadmap oficial do projeto

#### versão 2.0.0 (sem previsão, aceita-se contribuições)
- verificar qual a bandeira do cartão de credito;
- verificar catão está dentro da data de validade.
- verificar se o nome tem o formato correto.
- README translated to english;


#### versão 1.0.0 (released)
- funcionalidades: validador de cartao de crédito.
- valida se não foi informado o paramento para a validaçao.