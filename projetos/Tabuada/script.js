let res=document.getElementById('res')
let num=document.getElementById('num')
let tab=document.getElementById('tab')
let btn=document.getElementById('btn')

function contar(){
    let n=Number(num.value)
    tab.innerHTML=''
    for(let c=1;c<=10;c++){
        let item=document.createElement('option')
        item.text=`${n} X ${c} = ${n *c}`
        tab.appendChild(item)
    }
    num.value=''
    num.focus()
}