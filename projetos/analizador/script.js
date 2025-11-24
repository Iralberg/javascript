const tab = document.getElementById('tab')
const res = document.getElementById("res")
const num = document.getElementById('numero')
const valores = []
function inNumero(n) {
    if (n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}
function inlista(n, lista) {
    if (lista.indexOf(n) == -1) {
        return true
    }
    else {
        return false
    }
}

function adicionar() {
    if (inlista(Number(num.value), valores) && inNumero(Number(num.value))) {
        let n = Number(num.value)
        valores.push(n)
        const item = document.createElement('option')
        item.innerHTML = `Valor ${n} adicionado`
        tab.appendChild(item)
    } else {
        alert('Valor ínvalido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML=''
}

function analizar() {
    let n = Number(num.value)
    if (valores.length === 0) {
        alert('Adicione valores antes de adicionar')
    } else {
        res.innerHTML = ''
        let tot = valores.length
        let soma = 0
        let maior = valores[0]
        let menor = valores[0]
        valores.forEach(item => {
            soma += item
            if (item > maior) {
                maior = item
            }
            if (item < menor) {
                menor = item
            }
        })
        let media = soma / tot
        res.innerHTML = `Ao todo, temos ${tot} números cadastrados`
        res.innerHTML += `<p>O Maior número é ${maior}</p>`
        res.innerHTML += `<p>O Menor número é ${menor}</p>`
        res.innerHTML += `<p>A média de todos os número é ${media}</p>`
        res.innerHTML += `<p>A soma  total  de todos os número é ${soma}</p>`
    }
    num.value = ''
    num.focus()
}