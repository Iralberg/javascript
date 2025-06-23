function somar(){
let num= document.getElementById('nu')
let msg=document.getElementById('msg')
let n=Number(num.value)
    if(n==''){
        alert('[Error], falta de dados')
    }else{
        msg.innerHTML=''
        for(let i=1;i<11;i++){
            let item=document.createElement('option')
            item.innerHTML=`${n} X ${i}=${n*i}`
            msg.appendChild(item)
        }
    }
}