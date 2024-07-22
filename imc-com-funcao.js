

function calcularImc(peso,altura){
    return peso/ altura / Math.pow(altura,2)
}
function classificarImc(IMC){
    if(IMC <= 18.5){
        return('seu peso é ', IMC.toFixed(2) ,'abaixo do peso')
    }else if(IMC >= 18.5 && IMC <25){
        return('seu peso é ', IMC.toFixed(2) ,'peso normal')
    }else if(IMC >= 25 && IMC <30){
        return('seu peso é ', IMC.toFixed(2) ,'acima do peso')
    }else if(IMC >=30 && IMC <40){
        return('seu peso é ', IMC.toFixed(2) ,'obeso')
    }else if(IMC >=40){
        return('seu peso é ', IMC.toFixed(2) ,'obesidade grave')
    
    }
    
}

//main
(function (){
  const peso = 50.4
const altura = 1.60

const IMC = calcularImc(peso,altura)
console.log(classificarImc(IMC))  
})()





