
const precoCombustivel = 6.20
const precoEtanol = 4.50

const gastoPorKmLt = 10 
const distancia = 15300
const tipoDoCarro = 2

let litrosConsumido = distancia / gastoPorKmLt

if(tipoDoCarro === 1){
    let valorGasto = litrosConsumido * precoCombustivel
    console.log(valorGasto.toFixed(2))
}else if(tipoDoCarro === 2){
    let valorGasto = litrosConsumido* precoEtanol
    console.log(valorGasto.toFixed(2))
}

