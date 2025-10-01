let rad = document.getElementsByName('rad')
let res = document.getElementById('res')
let foto=document.getElementById('foto')
function salvar() {
    if (rad[0].checked) {
        res.innerHTML = '<h2>Goku</h2>'
        foto.src="transferir.jpeg"
    }
    else if (rad[1].checked) {
        res.innerHTML = `<h2>Vegeta</h2>`
        foto.src='images.jpeg'
    }
}
