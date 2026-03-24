
//é criado uma variável e conectado a uma array
//o for in busca por posição
//esse é formato do for in => for (let variavel in array)
//usado pra arrays,objetos e para arrays de objetos
//Ex:
const nomes=['paulo','erick','pedro']//array
const users=[{nome:'auru',idade:13}] //array de objetos
const user={nome:'alex',idade:12} //objeto
users.push(user)
function Usuarios(){

    for(let chave in users){
        console.log(chave,users[chave])
    }
}
function Nomes(){
for(let chave in nomes){
    console.log(chave,nomes[chave])
}
}
Usuarios()
Nomes()