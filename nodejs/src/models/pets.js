export class Pets{
    id;
    nome;
    especie;
    idade;
    peso;
    

    // Métodos (Comportamentos da regra de negócio)
    verificarSaude() {
        if(this.peso == 2){
            return console.log("abaixo do peso");
        }
        else{
            return console.log("peso normal")
        }
        // O "this." é obrigatório no JavaScript para acessar os atributos da própria classe
      
    }

    exibirFicha() {
        console.log(`\n--- RELATÓRIO DE FICHAS ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Especie: ${this.especie}`);
        console.log(`Idade: R$ ${this.idade} anos`);
        console.log(`Peso: ${this.p} unidades`);
        console.log(`Verificar Saude: R$ ${this.verificarSaude()}`);
        console.log(`----------------------------\n`);
    }
}