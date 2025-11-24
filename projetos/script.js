// Cria um array para guardar os cadastros
const pessoas = [{nome:'iral', email:'iraldo@gmail.com'},
  {nome:'alex', email:'iraldo1@gmail.com'}
]

function cadastrar() {
  // Pega o que o usuário digitou
  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value

  // Cria um objeto com nome e email
  const pessoa = { nome: nome, email: email }

  // Adiciona no array
  pessoas.push(pessoa)

  // Mostra na tela
  mostrarLista()
  console.log(pessoas[0].nome)
}

function mostrarLista() {
  const lista = document.getElementById('lista')
  lista.innerHTML = '' // limpa a lista

  // Mostra todas as pessoas cadastradas
  pessoas.forEach(p => {
    const item = document.createElement('li')
    item.textContent = `${p.nome} - ${p.email}`
    lista.appendChild(item)
  })
}
