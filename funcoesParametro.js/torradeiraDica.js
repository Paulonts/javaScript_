/*
torrar("pao de forma, ", 10.95 , "Paulo")
torrar("pao integral, ", 10.95, )

function torrar(pao, valor, nome = "Cliente"){
    console.log("torrada feita com " + pao  + "o total deu " + valor + ", ele é um pedido de " + nome)
    console.log("\n")
}
*/


let clientePassouNome = true
var ClienteComNome = "Paulo"
var ClienteSemNome = "Cliente"

function torrarNome(pao, ClienteComNome, valor) {
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + ClienteComNome)
    console.log("o total deu " + valor)
    console.log("\n")
}

function torrarSemNome(pao, ClienteSemNome, valor) {
    console.log("torrada feita com " + pao)
    console.log("ele é um pedido de " + ClienteSemNome)
    console.log("o total deu " + valor)
    console.log("\n")
}

if (clientePassouNome == true) {
    torrarNome("pao de forma, ", ClienteComNome, 10.95)

} else {
    torrarSemNome("pao integral, ", ClienteSemNome, 10.85)

}