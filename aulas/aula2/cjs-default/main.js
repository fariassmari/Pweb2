//const sum = require('./lib');
//import sum from './lib.js'; // importação do default
//import { sum, minus } from './lib.js';
const { soma, subtrai } = require('./lib.js'); // importação nomeada

console.log(soma(2, 1)); //=> 3
console.log(subtrai(2, 1)); //=> 1