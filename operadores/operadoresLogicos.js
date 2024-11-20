//Operador logico AND

// estamos indo viajar mas, voce tem que ser maior de idade e tem que ter o visto verificado.
let Idade = 18
let VistoVerificado = true
let resultado = (Idade >= 18) && (VistoVerificado === true)
console.log(resultado)

//estamos criando um jogo no qual para voce passar de fase tem que ser coletadas 100 moedas e tem que pegar 1 item "estrela"
let moedasColetadas = 100
let item = "estrela"
let resulatdo = (moedasColetadas >= 100) && (item === "estrela")
console.log("voce passou de fase: " + resultado)


//Operador logico OR

/*voce esta programando um jogo que tem as seguintes condições: o personagem só pode sair da casa dele se nao estiver chovendo, ou
se ele estiver com um guarda chuva*/
let clima = "chovendo"
let personagemItem = "guarda-chuva"
let podeSair = (clima !== "chovendo") || (personagemItem === "guarda-chuva")
console.log("O personagem pode sair de casa: " + podeSair)

//Operdor logico NOT
let tempo = "chovendo"
let = horario = 8
let resultado1 = !(tempo !== "chovendo") && (horario > 6)
console.log(resultado1)

