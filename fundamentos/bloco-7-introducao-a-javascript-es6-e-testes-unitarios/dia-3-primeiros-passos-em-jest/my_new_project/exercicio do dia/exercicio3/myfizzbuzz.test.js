const myFizzBuzz = require('./myfizzbuzz')

describe('Divisível por 3 ou 5',() => {
    test('divisível por 3', () => {
        expect(myFizzBuzz(21)).toEqual('fizz')
    })

    test('divisível por 5', () => {
        expect(myFizzBuzz(20)).toEqual('buzz')
    })

    test('divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    })

    test('value is not a number', () => {
        expect(myFizzBuzz('15')).toEqual(false)
    })

    test('retorna proprio numero caso não seja divisivel', () => {
        expect(myFizzBuzz(17)).toEqual(17)
    })
})