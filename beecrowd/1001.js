var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);

let result = num1 + num2;

console.log("X = "+ result);