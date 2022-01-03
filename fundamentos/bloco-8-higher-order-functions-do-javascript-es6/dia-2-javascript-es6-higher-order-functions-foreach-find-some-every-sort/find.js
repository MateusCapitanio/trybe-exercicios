const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => { 
    if(number%3 === 0 && number%5===0) {
        return number
    } else {
        return 'Não divisível'
    }
}

const verificaParImpar = (number) => {
    if(number>30){return number}
}



console.log(numbers.find(verificaParImpar))

//console.log(findDivisibleBy3And5(25))