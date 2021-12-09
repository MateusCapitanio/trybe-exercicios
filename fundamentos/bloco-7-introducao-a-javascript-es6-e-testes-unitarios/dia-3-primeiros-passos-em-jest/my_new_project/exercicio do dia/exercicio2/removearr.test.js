const removearr = require('./removearr')

describe('Funções de remove array', () => {
    test('testando remove value 2', () => {
        expect(removearr([1,2,3,4,5],2)).toEqual([1,3,4,5])
    })

    test('testando remove value 3', () => {
        expect(removearr([1,2,3,4,5],3)).toEqual([1,2,4,5])
    })

    test('testando remove value 5', () => {
        expect(removearr([1,2,3,4,5],5)).toEqual([1,2,3,4])
    })
})