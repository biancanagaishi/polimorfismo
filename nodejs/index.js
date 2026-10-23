import readline from 'readline-sync';
import {Pets  } from './src/models/Pets.js';

console.log("=== SISTEMA DE ESTOQUE ===\n");

// 1. Instanciando o objeto na memória RAM
const meuPet = new Pets();

// 2. Coletando dados do usuário via terminal
meuPet.id = readline.questionInt("Digite o ID do pet: ");
meuPet.nome = readline.question("Digite o nome do pet: ");
meuPet.idade = readline.questionFloat("Digite a idade: ");
meuPet.especie = readline.questionInt("Digite a especie: ");
meuPet.peso = readline.questionInt("Digite o peso: ");

// 3. Processamento e Saída utilizando os métodos da Classe
console.log("\nProcessando regras de negócio...");
meuPet.exibirFicha();