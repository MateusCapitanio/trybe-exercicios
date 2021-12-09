
const sum = (a,b) => {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw Error('A função espera somente números')
        console.log('Esta função está errada')
    } else {
        return a+b
    }
    
}

module.exports = sum;