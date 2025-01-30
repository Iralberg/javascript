var agora= new Date()
var hora=18
console.log(`agora é exatamente ${hora} horas`)
if(hora <5  ){
    console.log('Boa Madrugada')
}else if(hora <12){
    console.log('Bom Dia')
}else if(hora <18){
    console.log('Boa Tarde')
} else{
    console.log('Boa Noite')
}