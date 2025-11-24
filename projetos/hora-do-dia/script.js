let res=document.getElementById('res')
let msg=document.getElementById('msg')
let img=document.getElementById('img')

function carregar(){
    let data= new Date()
    let hora=data.getHours()
    msg.innerHTML= `Agora são ${hora}
    h`
    if(hora<12){
        img.src="Fotos/manha.png"
        document.body.style.backgroundColor='#BAA77D'
    } else if(hora<18){
        img.src='Fotos/tarde.png'
        document.body.style.backgroundColor='#585458'
    }else if(hora<=24){
        img.src='Fotos/noite.png'
        document.body.style.backgroundColor='#594367'
    }
}