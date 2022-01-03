const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((nome) => nome === name)
}

const temNome = (arr,name) => {
    return arr.some((nomes) => nomes === name)
}

console.log(temNome(names,'Bruna'))

//console.log(names.some((nome) => nome === 'Cláudia'))

//console.log(hasName(names, 'Ana'))