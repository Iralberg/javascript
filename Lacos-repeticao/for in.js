const users=[{nome:'auru',idade:13},'iraldo']
const user={nome:'alex',idade:12}
users.push(user)
for(let chave in user){
    console.log(chave,user[chave])
}
