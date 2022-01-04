const {books} = require('./arrayLivros')

const calcMediaIdades = () => {
    const pegaIdades = books.map((element) => {
        return element.releaseYear - element.author.birthYear
    })
    //console.log(pegaIdades)

    const mediaDasIdades = pegaIdades.reduce((accumulator,number) => {
        return (accumulator+number)
    },0)
    const result = mediaDasIdades/pegaIdades.length
    console.log(`Resultado da média das idades é: ${result}`)
}

calcMediaIdades()