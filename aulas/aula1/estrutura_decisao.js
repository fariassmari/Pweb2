const op1 = 10;
const op2 = 10;
const operator = '+';

// Usando if...else
if (operator === '+'){
    result = op1 + op2;
} else if (operator === '-'){
    result = op1 - op2;
} else if (operator === '*'){
    result = op1 * op2;
} else if (operator === '/'){
    result = op1 / op2;
} else {
    result = "Operador inválido";
}

// Usando switch
switch(operator){
    case '+':
        result = op1 + op2;
        break;
    case '-':
        result = op1 - op2;
        break;
    case '*':
        result = op1 * op2;
        break;
    case '/':
        result = op1 / op2;
        break;
    default:
        result = "Operador inválido";
        break;
}

console.log(result);