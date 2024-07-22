


const pessoa = {
    nome: 'Marcus V. Filho',
    idade : 19,

    descreva: function(){
        console.log('Meu nome é  ${this.nome} e minha idade é  ${this.idade}')
    
    }
    
}
pessoa.descreva = function(){
    console.log('Meu nome é ${this.nome} ')

}
pessoa.descreva();