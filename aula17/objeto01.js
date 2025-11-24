let amigo = {
    nome: 'iral',
    sexo: 'M',
    peso: 87, engordar(p){
        this.peso+=p
    }}
    amigo.engordar(2)
    console.log(`${amigo.nome} tem ${amigo.peso} kilos`)