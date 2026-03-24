let img = document.getElementById('img')
let idade = document.getElementById('idade')
let sex = document.getElementsByName('sex')
let date = new Date()
let ano = date.getFullYear()
let res=document.getElementById('res')
function verificar() {
    let num = Number(idade.value)
    let fano =  ano - num 
    if (idade.value == '' || num >= 200) {
        alert('Erro[ ], falta dados ou idade indisponivel')
    }
    else {
        //Parte homem
        if (sex[0].checked) {
           
            if(num<=4){
                img.src='fotos/bebeM.png'
                res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
            else if(num<=10){
                img.src='fotos/Menino.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
             else if(num<=20){
                img.src='fotos/garoto.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
             else if(num<=45){
                img.src='fotos/adulto.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
            else if(num>45){
                img.src='fotos/idoso.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
        }
        //Parte Mulher
         else if (sex[1].checked) {
             if(num<=4){
                img.src='fotos/bebeF.png'
                res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
            else if(num<=10){
                img.src='fotos/Menina.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
             else if(num<=20){
                img.src='fotos/garota.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
             else if(num<=45){
                img.src='fotos/adulta.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
            else if(num>45){
                img.src='fotos/idosa.png'
                 res.innerHTML=`Seu ano de nascimento é ${fano}`
            }
        }
       
    } 
    idade.value=''
    idade.focus()
}