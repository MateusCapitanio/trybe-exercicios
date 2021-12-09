const sum = require('./sum')

describe('Testes de função soma', () => {
    test('Testando expect 9', () => {
        expect(sum(5,4)).toBe(9)
    })

    test('Testando expect 0', () => {
        expect(sum(0,0)).toBe(0)
    })

    test('Testando expect error string', () => {
        expect(() => {sum(2,'5')}).toThrow()
    })
})