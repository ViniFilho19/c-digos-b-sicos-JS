const peso = 50.4
const altura = 1.60

const IMC = peso / Math.pow(altura,2)
console.log(IMC.toFixed(2))

if(IMC <= 18.5){
    console.log('seu peso é ', IMC.toFixed(2) ,'abaixo do peso')
}else if(IMC >= 18.5 && IMC <25){
    console.log('seu peso é ', IMC.toFixed(2) ,'peso normal')
}else if(IMC >= 25 && IMC <30){
    console.log('seu peso é ', IMC.toFixed(2) ,'acima do peso')
}else if(IMC >=30 && IMC <40){
    console.log('seu peso é ', IMC.toFixed(2) ,'obeso')
}else if(IMC >=40){
    console.log('seu peso é ', IMC.toFixed(2) ,'obesidade grave')

}

