const soma = (v1, v2) => v1 + v2;
const subtrai = (v1, v2) => v1 - v2;
const multiplica = (v1, v2) => v1 * v2;
const divide = (v1, v2) => { 
    if (v2 !== 0){
        return v1 / v2;
    } else {
        return 'divisao por zero';
    }
};

export { soma, subtrai, multiplica, divide }