import { subtotal, validos, total } from "./funcoes.js";

const produtos = [
  [1, 10.00, 2],
  [2, 10.00, 2],
  [3, 10.00, 2],
  [4, 10.00, 0]
];

console.log("Itens com subtotais:");
console.table(subtotal(produtos));

console.log("Itens com quantidade > 0:");
console.table(validos(produtos));

console.log(`Valor final do carrinho: R$ ${total(produtos).toFixed(2)}`);