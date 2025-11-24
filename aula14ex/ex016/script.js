let passo = document.getElementById('passo')
let fim = document.getElementById('fim')
let inicio = document.getElementById('inicio')
let res = document.getElementById('res')
function contar() {
    let p = Number(passo.value)
    let f = Number(fim.value)
    let i = Number(inicio.value)
    res.innerHTML = ''
    if (i == 0 || f == 0 || p === '') {
        alert('Erro[ ], falta você botar dados')
    } else {
        if(p==0){
            alert('Erro, considerando passo 1')
            p=1
        }
      
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                let label = document.createElement('label')
                label.innerHTML = ` ${c} 	\u{1F449}`
                res.appendChild(label)

            } 
        } else {
            for (let c = i; c >= f; c -= p) {
                let label = document.createElement('label')
                label.innerHTML = ` ${c} 	\u{1F449}`
                res.appendChild(label)
            }
        }res.innerHTML += '\u{1F3C1} '


    }
}