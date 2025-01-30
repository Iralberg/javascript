var agora=new Date()
var seman=agora.getDay()
console.log(`${seman}`)
switch (seman){
    case 0:
        console.log("Domingo")
        break
    case 0:
            console.log("Segunda")
            break
    case 1:
        console.log("Terça")
        break
    case 2:
        console.log("Quarta")
        break
    case 3:
        console.log("Quinta")
        break
    case 4:
        console.log("Sexta")
        break
    case 5:
        console.log("Sábado")
        break
        default:
            console.log('Error.Valor inválido')
            break
}