//o for of é mas usado em array, ele pegar os valores da array, diferente do for in
//a estrutura do for of é essa => for (let variavel of array){}
//Usados  pra arrays
//Ex:
const frutas=['banana','uva','pera']
const users=['iralberg','carlos','pedro']
const user=[
    {nome:'iral', idade:8},{nome:'pedro', idade:8},{nome:'raul', idade:8},{nome:'gersom', idade:8}
]
for (let name of users){
    console.log(name)
}