const {books} = require('./arrayLivros')

const contaCaracteres = () => {
    var maiorNome = '';
    var objetoMaior = '';
    const percorreLivrosArray = books.forEach(element => {
        if(element.name.length > maiorNome.length) {
            maiorNome = element.name
            objetoMaior = element
        }
    });
    console.log(`o Objeto com maior nome é:`)
    console.log('----------------------------')
    console.table(objetoMaior)
}

contaCaracteres()