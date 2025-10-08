// Array
const numbers = [1, 2, 3, 4, 5]

console.log(numbers);

// Acesso 
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Alteração
numbers[0] = 10;
console.log(numbers[0]);
numbers[4] = 40;
console.log(numbers[4]);
console.log(numbers);

// Tipos multiplos
const multiplos = [1, 'John', true, null, [1, 2]];
console.log(multiplos[1]);
console.log(multiplos[4]);

// Spread Operator - Desempacota conjunto de dados 
const numeros = [1, 2, 3]
console.log([...numeros, 4, 5, 6])

// Iterações 
const num = [1, 2, 4];
let result = '';

for (let flag = 0; flag < num.legth; flag++){
    result += num[flag] + ' ';
}
//console.log(result);

for (const index in num){
    result += num[index] + ' ';
}
//console.log(result);

for (const value of num){
    //result += value[index] + ' ';
}

//console.log(result);

// Objeto array
const n = [1, 2, 3];

// Retorna a quantidade de valores contidos no array
console.log(n.length);

// Adiciona o numero ao array
console.log(n.push(4));
console.log(n);

// Adicona um ou mais elementos ao array
console.log(numbers.unshift(0)); //=> 4
console.log(numbers);

// Remove o ultimo elemento do array
console.log(n.pop());
console.log(n);

// Remove o primeiro elemento do array
console.log(n.shift());
console.log(n);

// Inverte a ordem dos elementos no array
console.log(n.reverse());
console.log(n);

// Ordena os elementos do array 
console.log(n.sort());
console.log(n);

// Adiciona, remove ou substitui elementos do array
console.log(n.splice(1, 2));
console.log(n);


// Acessor
const lista = [1, 2, 3, 4, 5, 6, 7];

// Retorna se o valor esta contido no array
console.log([1, 2, 3].includes(1)); 

// Adiciona espaço entre os elementos do array
console.log([1, 2, 3].join(' ')); 

// Divide o array
console.log([1, 2, 3].slice(1, 2)); 

// Iteration

// Percorre o array e cria um novo array com o resultado da função aplicada
const array = [1, 2, 3, 4, 5, 6];
console.log(array.map((value) => value * 2)); 

// Cria um novo array apenas com os elementos que passaram no teste da função
const array = [1, 2, 3, 4, 5, 6];
console.log(array.filter((value) => value % 2 !== 0)); 

// Reduz o array a um unico valor
const array = [1, 2, 3, 4, 5, 6];
console.log(array.reduce((addition, value) => addition + value, 0)); 

// Verifica se todos os elementos passam no teste
const array = [2, 4, 6];
console.log(array.every((value) => value % 2 == 0)); 

// Verifica se ao menos um elemento passa no teste
const array = [1, 2, 3, 4, 5, 6];
console.log(array.some((value) => value % 2 == 0)); 