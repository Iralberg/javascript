let inic=document.querySelector('#inic')
let passo=document.querySelector('#passo')
let fim=document.getElementById('fim')
let res =document.getElementById('res')
const btn=document.getElementById('btn')
btn.addEventListener('click', contar)
function contar(){
let i=Number(inic.value)
let p=Number(passo.value)
let f=Number(fim.value)

if(inic.value===''||fim.value===''||passo.value===''){
    alert('Erro[ ], Falta dados!')
}
else{
    if(p==0){
        p=1
    }
    if(i<=f){
        res.innerHTML='Resultado:'
        for(let c=i;c<=f;c+=p){
            res.innerHTML+=` ${c} `
        }
    }
    else if(i>=f){
        res.innerHTML='Resultado:'
        for(let c=i;c>=f;c-=p){
            res.innerHTML+=` ${c} `
        }
    }
   
}
    passo.value=''
    inic.value=''
    fim.value=''
    inic.focus()
}