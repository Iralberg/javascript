//forma de usar o input date padronizado
// new Date("2026-03-24")
let inputInic="2026-02-02"
let inputFim="2026-03-24"
let inic=new Date(inputInic)
let fim=new Date(inputFim)
let diferenca=  fim - inic
let dias = diferenca / (1000 * 60 * 60 * 24)// isso tranforma pra dias
console.log(dias)