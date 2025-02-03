function carregar(){
var msg=document.getElementById('msg')
var foto=document.getElementById('foto')
var data=new Date()
var hora=data.getHours()
//var hora=19
msg.innerHTML=`Agora são ${hora} horas`
if (hora >=0 && hora<12){

foto.src ="../ex014/Fotos/manha.png"
document.body.style.background='#D8C0A2'
}else if(hora >=12 && hora < 18){

foto.src ="../ex014/Fotos/tarde.png"
document.body.style.background='#C9C0B7'
}else{

foto.src ="../ex014/Fotos/noite.png"
document.body.style.background='#5c4468'
}
}

