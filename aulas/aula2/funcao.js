function f1(param1, param2){
    console.log(param1 + '-' + param2);
    return 'Função f1 executada';
}

//console.log(f1('Olá', 'Mundo'));

function soma(v1, v2){
    return v1 + v2;
}

let resultado = soma(10, 20);
//console.log(resultado);

// Função atribuída a uma variável
const sum = function(v1,v2){
    return v1 + v2;
}

//console.log(sum(20, 30));

// Arrow function, boa prática para evolução da declaração padrão
const sumArrowFunction = (v1, v2) => v1 + v2;

//console.log(sumArrowFunction(30, 40));

const sumRestParams = (...params) => {
    const tamanho = params.length;

    let somatorio = 0;

    for (let flag = 0; flag < tamanho; flag++){
        somatorio += params[flag];
        console.log(params[flag]);
    }

    somatorio = 0;
    for (let elemento of params){
        somatorio += elemento;
    }
}

// sumRestParams(1, 2, 3, 4, 5, 6, 7, '...');

// Callback function
function calculadora(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calculadora(10, 20, (v1,v2) => v1 + v2));
console.log(calculadora(10, 20, (v1, v2) => v1 - v2))
console.log(calculadora(10, 20, (v1, v2) => v1 * v2));
console.log(calculadora(10, 20, (v1, v2) => v1 / v2));
