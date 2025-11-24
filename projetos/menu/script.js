let menu=document.querySelector('#menu')
let btn=document.querySelector('#abrir')
let btnOp=document.getElementById('open')

btn.addEventListener('click', abrir)
btnOp.addEventListener('click',fechar)
function abrir(){
menu.classList.toggle('hide')
btn.classList.toggle('hide')
}
function fechar(){
menu.classList.toggle('hide')
btn.classList.toggle('hide')
}
function sobre(){
window.location.href='sobre.html'
}