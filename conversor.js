import entradaDados from 'readline-sync';

console.log("Conversor de Milhas para Quilometros: \n");

let mi = entradaDados.question("Digite o valor em Milhas: ");
let km = mi / 0.62137;

console.log(mi+ " Milhas equivale a "+km+" km");