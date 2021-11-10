

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var menor = numbers[0];


for (var i of numbers) {
    if(i<menor) {
        menor = numbers[i]
    }
    console.log(`[Menor valor atual]: ${menor}`)
}





