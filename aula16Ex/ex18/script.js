let final=document.querySelector('#finalizar')
let num=document.getElementById('num')
let res=document.getElementById('res')
let tab=document.getElementById('tab')
let msg =document.getElementById('msg')
let valores=[]
function isNumero(n){
    // if(elemento) , o if verifica se o elemento existe
    //if(!elemento), o if verifica se o !elemento não existe
if(Number(n) >=1 && Number(n)<=100){
    return true
}else{
    return false
}
}
function isLista(n,l){
    // -1, é oque não existe no indexOf
if(l.indexOf(Number(n)) != -1){
    return true
}else {
    return false
}
}
function adicionar() {
    // if(elemento) , o if verifica se o (elemento) existe
    //if(!elemento), o if verifica se o (!elemento) não existe
    // o ! inverte o valor
    if(isNumero(num.value) && !isLista(num.value, valores)){
        valores.push(Number(num.value))
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado.`
        
        tab.appendChild(item)
    }else{
        alert('Valor ínvalido ou já encontrado na lista.')
    }
   num.value=''
   num.focus()
}
function finalizar(){
let tot= valores.length
if(valores.length==''){
    alert( 'Adicione valores antes de adicionar')
}else{
    res.innerHTML=''
    let maior=valores[0]
    let menor=valores[0]
    let soma=0
    let media=0
    for(let pos in valores){
        soma+=valores[pos]
        if(valores[pos] > maior){
            maior=valores[pos]
        }
        if(valores[pos] < menor){
            menor=valores[pos]
        }
    }
    media= soma/tot
    res.innerHTML+=`<p>Ao todo,temos ${valores.length} números cadastrados </p>`
    res.innerHTML+=`<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML+=`<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML+=`<p>O soma de todos os valores é ${soma}</p>`
    res.innerHTML+=`<p>A média de todos os valores é ${media.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`
}
}