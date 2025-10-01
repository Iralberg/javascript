let res = document.getElementById('res')
let num1 = document.getElementById('num1')
function contador() {
    let vel = Number(num1.value)
    res.innerHTML = `Mantenha o cinto de segurança <br/>`
    if (vel >= 60) {
        res.innerHTML+= `Sua velocidade é ${vel} km/h. <strong>Foi multado</strong> <br/>`
    } else {
        res.innerHTML+=`Sua velocidade é ${vel} km/h. Parabéns você <strong>não foi Multado</strong> <br/>`
    }
}