
let inic =document.querySelector('#inic')
let fim=document.querySelector('#fim')
let passo=document.querySelector('#passo')
let res=document.getElementById('res')
function contar(){
    let i=Number(inic.value)
    let p=Number(passo.value)
    let f=Number(fim.value)
    res.innerHTML=''
if(inic.value=='' || passo.value=='' || fim.value==''){
    alert('Erro[ ], Faltar informar dados')
}else{
    if(p<=0){
        alert('Erro, considerando passo 1')
        p==1
    }
    if(i<=f){
        for(let c=i;c<=f;c+=p){
            let item=document.createElement('label')
            item.innerHTML+= ` ${c} 👉` 
            res.appendChild(item)
        }
    }else{
        for(let c=i;c>=f;c-=p){
            let item=document.createElement('label')
            item.innerHTML=` ${c} 👉`
           
            res.appendChild(item)
        } res.innerHTML+=`🏁`
    }
}
}