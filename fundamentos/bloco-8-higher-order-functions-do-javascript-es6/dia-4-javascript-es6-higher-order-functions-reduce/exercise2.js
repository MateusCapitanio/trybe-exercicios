const {books} = require('./arrayLivros')

const somandoNomes = () => {
  const concatenaNomes = books.reduce((acc,autor) => {
    return `${acc+autor.author.name}, `
  },'')
  console.log(concatenaNomes)
}

somandoNomes()