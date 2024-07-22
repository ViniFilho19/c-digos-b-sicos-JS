const nota1 = 6
const nota2 = 6
const nota3 = 8
const media = (nota1 + nota2 + nota3)/3
console.log(media.toFixed(2))

if (media < 5){
    console.log('sua nota é ', media.toFixed(2), 'reprovado')
}else if (media >= 5 && media <= 6){
    console.log ('sua nota é ', media.toFixed(2),  'recuperação' )

}else if(media >= 6){
    console.log ('sua nota é ', media.toFixed(2), ' aprovado')
}
