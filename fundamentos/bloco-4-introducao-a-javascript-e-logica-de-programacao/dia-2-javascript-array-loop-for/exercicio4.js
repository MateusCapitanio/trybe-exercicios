
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var somaTotal = 0;


for (let i = 0; i < numbers.length; i+=1) {
    somaTotal = somaTotal+numbers[i]
}

var media = somaTotal/numbers.length

console.log(`[Soma total]: ${somaTotal}`)
console.log(`[Média Aritmética]: ${media}`)

if(media>20) {
    console.log('[Valor maior do que 20!]')
} else {
    console.log('[Valor menor ou igual 20!]')
}

