let valores=[1,7,1,2,9,12]
valores.sort()
console.log(valores)
// for(let pos=0;pos<valores.length;pos++){
//     console.log(`A posição ${pos} tem valor ${valores[pos]}`)
// } forma mais tradicional

for(let pos in valores){
console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}