
const techList = (arr,string) => {
    let listaTech = [];
    if(arr.length === 0) {
        return 'Vazio!'
    } else {
        for (let i = 0; i < arr.length; i+=1) {
            listaTech[i] = {
                tech: arr[i],
                name: string,
            }        
        }
        //link de onde encontrei a solução dessa questão
        //https://www.edsonemiliano.com.br/blog/como-ordenar-uma-array-de-objetos-com-javascript-sort/
        listaTech.sort(function (a, b) {
            return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
        });
        return listaTech
    }
}

techList([],'Lucas')

module.exports = techList;