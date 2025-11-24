let msg = document.getElementById('msg')
let res = document.getElementById('res')
let sexo = document.getElementsByName('sexo')
let fano = document.getElementById('ano')
let data= new Date()
let ano = data.getFullYear()
function idade() {
    let img=document.getElementById('img')
    let ano1= Number(fano.value)
    let idade= ano - ano1
    if (ano1 <= 0 || ano1>ano) {
        alert('Erro[  ] Data inválida')
    } else if (sexo[0].checked)//Parte Homem
     {
        genero='Homem'
        res.innerHTML = `${genero} com ${idade} anos`
        if(idade<=4){
           img.src='fotos/bebeM.png'
        } else if(idade<=10){
           img.src='fotos/menino.png'
        }else if(idade<=20){
            img.src='fotos/garoto.png'
        }else if(idade<=50){
            img.src='fotos/adulto.png'
        }else if(idade> 60){
            img.src='fotos/idoso.png'
        }
    } else if (sexo[1].checked) //Parte mulher
         {
        genero='Mulher'
       res.innerHTML = `${genero} com ${idade} anos`
       if(idade<=4){
           img.src='fotos/bebeF.png'
        } else if(idade<=10){
           img.src='fotos/menina.png'
        }else if(idade<=20){
            img.src='fotos/garota.png'
        }else if(idade<=50){
            img.src='fotos/adulta.png'
        }else if(idade> 60){
            img.src='fotos/idosa.png'
        }
    }

} 
