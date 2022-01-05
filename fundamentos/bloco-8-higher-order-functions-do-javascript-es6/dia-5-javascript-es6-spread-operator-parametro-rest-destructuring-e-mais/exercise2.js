
const sum = (...args) => {
    return args.reduce((acc,value) => {
        return acc+value
    })
}

console.log(sum(1,2,3))