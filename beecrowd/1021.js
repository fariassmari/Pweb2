var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var N = parseFloat(input);

let valor = Math.round(N*100);

let notas = [10000, 5000, 2000, 1000, 500, 200];
let moedas = [100, 50, 25, 10, 5, 1];

console.log("NOTAS:");
for (let nota of notas){
    let qtd = Math.floor(valor / nota);
    console.log(`${qtd} nota(s) de R$ ${(nota / 100).toFixed(2)}`);
    valor = valor % nota;
}

console.log("MOEDAS:");
for (let moeda of moedas){
    let qtd = Math.floor(valor / moeda);
    console.log(`${qtd} moeda(s) de R$ ${(moeda / 100).toFixed(2)}`);
    valor = valor % moeda;
}