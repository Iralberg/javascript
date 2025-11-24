function esconder(){
    let container =document.getElementById('container')
    if(container.style.display==='block'){ //Método 1
        container.style.display='none'
    }else{
        container.style.display='block'
    }
}
function esconder2(){
    let containerB=document.querySelector('#container-b')
    containerB.classList.toggle('hide'); //Método 2
}
//  MÉTODO 2    
// div comece aparecendo, não coloca a classe no HTML
//Se a div já começa escondida, você coloca a classe direto no HTML e no CSS