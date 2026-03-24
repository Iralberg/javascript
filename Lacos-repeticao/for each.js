//forEach é uma forma de repetição especial parra arrays
//Essencial para arrays e arrays de objetos
//ESTRUTURA > ARRAY.forEach(item =>{})

const user=[
    {nome:'iral', idade:8},{nome:'pedro', idade:8},{nome:'raul', idade:8},{nome:'gersom', idade:8}
]
const usuarios={idade:17, id:1}
const frutas=['banana','abacate','laranja']
// user.forEach(function(item,index,array) {
//     console.log(index)
//     console.log(item)
//}); forma de função antiga

user.forEach((item,index,array) =>{
console.log(index,item.nome)
    
})
