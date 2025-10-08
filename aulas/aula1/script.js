// Definindo variaveis

let a = 10; // Tipagem dinâmica, padrão para variaveis que mudam de valor
const b = 20; // Tipagem fraca, padrão para variaveis que não mudam de valor
var c = 30; // Evitar usar var, pois tem escopo global e pode causar problemas, modificar o valor de uma var em um escopo pode afetar outro escopo

// Diferença do var para o let, o var extrapola o escopo do if, de um escopo local para um global

console.log(a, b, c);
console.log(typeof a, typeof b, typeof c);

// Exemplo de escopo de condicional com if
const estaLigado = true;

if (estaLigado === true) {
    var modoEnergia = "Energia Ligada";
} else {
    var modeEnergia = "Energia Desligada";
}
console.log(modoEnergia);

// Exemplo de escopo de condicional com for
for (var flag = 0; flag < 5; flag++){
    console.log(flag);
}

console.log(flag); // O var flag é acessível fora do for, pois o var tem escopo global
// Se fosse let, o let flag não seria acessível fora do for, pois o let tem escopo local

let nome;
console.log(typeof nome); // undefined, pois a variavel não foi inicializada

let idade = null;
console.log(typeof idade); // null, pois a variavel foi inicializada com null

disciplina = ["Programação JS", "Cálculo", "PWEB"];
console.log(disciplina);
console.log(typeof disciplina);
console.log(Array.isArray(disciplina));

const disciplina2 = {
    nome: "PWEB2",
    professor: "Francisco",
    semestre: 2024.1
};
console.log(disciplina2);
console.log(typeof disciplina2);

// Exemplo de conversão
const fahrenheit = 50;
const celsius = (fahrenheit-32) / 1.8;
console.log(celsius);

// Incremento
let incremento = 0;
incremento++;

const number1 = 10;
const number2 = 20;
const operator = '+';
let result;
if (operator === '+') {
    result = number1 + number2;
} else {
    result = number1 - number2;
}

// Operador ternário
result = (operator === '+') ? number1 + number2 : number1 - number2;
console.log(result);
// ? : (condição) ? true : false

let age = 18;
let status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status);