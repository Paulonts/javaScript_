let fruta = "banana"

switch (fruta) {
    case "laranja":
        console.log("fazer suco de latanja")
        break;

    case "banana":
        console.log("fazer vitamina de banana")
        break;

    case "maça":
        console.log("fazer torta de maça")
        break;

    default:
        break;
}

let plano = "ultra premium"


switch (plano) {
    case "premium":
        console.log("voce pussui o plano " + plano + ":")
        console.log("redes sociais ilimitadas")

    case "normal":
        console.log("voce pussui o plano " + plano + ":")
        console.log("4gb de internet")

    case "basico":
        console.log("voce pussui o plano " + plano + ":")
        console.log("ligacoções ilimitadas")

    default:
        console.log("escolha um plano")
        break;
}