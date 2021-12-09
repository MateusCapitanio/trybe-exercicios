const {encode,decode} = require('./encodedecode');

/*describe('Testando funções', () => {
    test('testando funções', () => {
        expect(decode('function')).toEqual('function')
    })
})*/

describe('Testando encode', () => {
    test('testando a,e,i,o,u', () => {
        expect(encode('aeiou')).toEqual('12345')
    })
})

describe('Testando decode', () => {
    test('testando 1,2,3,4,5', () => {
        expect(decode('12345')).toEqual('aeiou')
    })
})