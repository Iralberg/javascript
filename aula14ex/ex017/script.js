let res = document.getElementById('res')
let num=document.getElementById('num')
let tab=document.getElementById('tab')
function somar(){
    let n1=Number(num.value)
    tab.innerHTML=''
    if(n1===''){
        alert('Erro[], Digite algo')
    }else{
        for(let c=0;c<=10;c++){
            let p=document.createElement('option')
            p.innerHTML=`${n1} X   ${c} = ${n1*c}`
            tab.appendChild(p)
        }
    }
}