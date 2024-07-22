
function escrevaMeuNome(nome){
    return("meu nome é " +nome)
}
escrevaMeuNome('marcus')


function verificadorDeIdade(idade){
    if(idade>+18){
        console.log(escrevaMeuNome("marcus") +" sou de maior")
    }else{
        console.log(escrevaMeuNome("marcus") +' sou de maior')
    }
}
verificadorDeIdade(19)