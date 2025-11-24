let num=[7,2,3,1] //array
num[4]=6 //adiciona algo em array em posição espécifica
num.push(12) //adiciona algo em array de forma próxima
num.length //mostra a quantidade de elementos na array 
num.sort() //organiza em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições `)
console.log(`O primeiro valor é ${num[0]} `)
console.log(`a array está organizada assim ${num.sort()}`)

let pos= num.indexOf(3) //indexOf() , busca o valor
if(pos==-1){
    console.log('Erro, não existe esse numero')
}else{

    console.log(`o valor está na posição ${pos}`)
}