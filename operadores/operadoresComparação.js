// == é para comparar o valor
// === é para comparar o valor e o formato do conteudo


//DIFERENTE OU IGUAL

let numero = "1"
console.log(numero === 1)


let marca = "apple"
console.log(marca !== "apple")

//guardar o valor de uma variavel de resultado TRUE/FALSE
marca = "apple"
let resultado = marca !== "sansung"
console.log(resultado)




//sistema de embarcque de voos
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCpfCloqueado = cpfUsuario === cpfBloqueado

console.log("o usuario esta caçado " + ehCpfCloqueado)

//passagem que so um usuario pode usar
let cpfPermitido = "222.55.333-01"
let cpfDoUsusario = "222.555.33-02"
let ehBloqueado = cpfDoUsusario !== cpfPermitido
console.log("e um usuario invalido " + ehBloqueado)

 

//MAIOR OU MENOR


//Idade permitida
let idadeMinima = 18
let idadeDoUsuario = 17
let IdadePermitidaValida = idadeDoUsuario > idadeMinima
console.log("O usuario é maior de idade " + IdadePermitidaValida)

idadeMinima = 18
idadeDoUsuario = 18
IdadePermitidaValida = idadeDoUsuario >= idadeMinima
console.log("O usuario é maior de idade " + IdadePermitidaValida)


//idade de corte
let idadeDeCorte = 50
let IdadeDoUsuario = 49
let Resultado3Idade = idadeDeCorte <= IdadeDoUsuario
console.log("o usuario pode aposentar " + Resultado3Idade)