function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var img = document.getElementById('img')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[Error] Verifique os dados e tente novamente!')
  } else if (fsex[0].checked)// PARTE HOMEM
  {
    gênero = 'Homem'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    if (idade >= 0 && idade < 10) {
      //criança
      img.src = '../ex015/fotos/menino.png'
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    } else if (idade < 22) {
      //jovem
      img.src = '../ex015/fotos/homem.png'
      res.innerHTML = `Detectamos ${gênero} com ${idade} `
    } else if (idade < 50) {
      //adulto
      res.innerHTML = `Detectamos ${gênero} com   ${idade} `
      img.src = '../ex015/fotos/adulto.png'
    } else if (idade > 49) {
      //idoso
      res.innerHTML = `Detectamos ${gênero} com  ${idade} `
      img.src = '../ex015/fotos/idoso.png'
    }
  } else if (fsex[1].checked) //PARTE MULHER
  {
    gênero = 'Mulher'
    res.innerHTML = `Detectamos ${gênero} com   ${idade} `
    if (idade >= 0 && idade < 10) {
      //criança
      res.innerHTML = `Detectamos ${gênero} com   ${idade} `
      img.src = '../ex015/fotos/menina.png'
    }
    else if (idade < 22) {
      //jovem
      img.src = '../ex015/fotos/mulher.png'
      res.innerHTML = `Detectamos ${gênero} com   ${idade} `
    } else if (idade < 50) {
      //adulto
      res.innerHTML = `Detectamos ${gênero} com   ${idade} `
      img.src = '../ex015/fotos/adulta.png'
    } else {
      //idoso
      res.innerHTML = `Detectamos ${gênero} com   ${idade} `
      img.src = '../ex015/fotos/idosa.png'
    }
  }
}