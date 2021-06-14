const dados = {
  name: 'Gabriela',
  lastName: 'Feijó',
  age: 'Brasil',
}

dados.lastName = 'Carvalho'
/* dados.fullName = dados.name + ' ' + dados.lastName; */
//dados.fullName = `${dados.name} ${dados.lastName}`;
dados['fullName'] = `${dados.name} ${dados.lastName}`; // precisa colocar a propriedade com strings
/* dados['fullName'] = `${this.name} ${this.lastName}` // undefined */

console.log(dados)

const cachorro = {
  raca: 'labrador',
  cor: 'preto',
  latir(pessoa) {
    if (pessoa === 'homem') {
    return 'Latir';
  } else {
    return 'Nada';
  }
  }
};

console.log(cachorro.latir('homem'))
