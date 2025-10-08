import { Exame } from './funcoes.js';

const exame = new Exame([2, 2, 2, 2, 2], ['a', 'b', 'a', 'c', 'd']);

console.log("Aluno 1:", exame.add(['a','b','b','b','b'])); // 4
console.log("Aluno 2:", exame.add(['c','b','a','c','d'])); // 8
console.log("Aluno 3:", exame.add(['a','b','c','c','d'])); // 8
console.log("Aluno 4:", exame.add(['a','c','b','c','d'])); // 6
console.log("Aluno 5:", exame.add(['a','b','a','c','d'])); // 10

console.log("Média:", exame.avgMedia()); 
console.log("3 menores notas:", exame.min(3));
console.log("3 maiores notas:", exame.max(3));
console.log("Notas < 5:", exame.it());
console.log("Notas > 5:", exame.gt());