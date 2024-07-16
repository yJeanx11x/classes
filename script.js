class Pessoa {
        constructor(nome,sobrenome){
                this.nome=nome
                this.sobrenome=sobrenome
        }
        falar(){
                console.log(`${this.nome} está falando`)
        }
        beber(){
                console.log(`${this.nome} está Bebendo`)
        }
        comer(){
                console.log(`${this.nome} está Comendo`)
        }
}

const p1=new Pessoa('Jean','Lucas')
p1.beber()
console.log(p1)