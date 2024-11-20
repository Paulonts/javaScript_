let possuiOvos = false
let comprarItens = ""

if (possuiOvos) {
    comprarItens = "leite"
}else{
    console.log("voce passou na sessão de congelados")
    comprarItens = "lasanha"
}

console.log("voce comprou: " + comprarItens)


let nivelFome = 5

if (nivelFome === 1) {
    console.log("nivel de fome: pouca fome")
}else if(nivelFome === 2){
    console.log("nivel de fome: media fome")
}else{
    console.log("nivel de fome: muita fome")
}