
const multiplier = (multiplicador) => {
  return (number) => {
    return number*multiplicador
  }
}

const triple = multiplier(3)

console.log(triple(2))