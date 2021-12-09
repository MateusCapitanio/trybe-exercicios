
const calcDivision = (numbersArray) => {
    return (numberDiv) => {
        let soma = 0;
        for (let i = 0; i < numbersArray.length; i+=1) {
            soma+=numbersArray[i]
        }
        return soma/numberDiv
    }
}

const numerosQtd = calcDivision([2,2,2,2])

console.log(numerosQtd(4))