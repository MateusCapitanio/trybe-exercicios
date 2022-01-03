const numbers = [10,20,30,40,50]

const numberPar = (arr) => {
    return arr.every((num) => num > 2)
}

console.log(numberPar(numbers))