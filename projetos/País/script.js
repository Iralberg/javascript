let msg = document.getElementById('msg')
let res = document.querySelector('#res')
let pais = document.querySelector('#pais')
function verificar() {
    let p = pais.value
    if(p==''){
        alert('Erro[ ], Digite algo')
       
    }else if(p.toUpperCase() == 'BRASIL'){
         res.innerHTML = `Você escolheu <strong>${p.toUpperCase() }</strong>, você é Brasileiro!`
         
    }else{
        
        res.innerHTML = `Você escolheu <strong>${p.toUpperCase()}</strong>, você é Estrangeiro!`
    }
    pais.value = ''
}