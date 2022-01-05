const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo


const [modelPalio1,modelPalio2,yearPalio] = palio
const [modelShelby,modelShelby2,yearShelby] = shelbyCobra
const [modelChiron1,modelChiron2,yearChiron] = chiron


const toObject = () => {
    let carros = {
        palio: {
            modelPalio1,
            modelPalio2,
            yearPalio
        },
        shelbyCobra: {
            modelShelby,
            modelShelby2,
            yearShelby
        },
        chiron: {
            modelChiron1,
            modelChiron2,
            yearChiron
        }
    }
    console.log(carros)
}

toObject()