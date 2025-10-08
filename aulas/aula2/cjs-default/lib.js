const soma = (v1, v2) => v1 + v2;
const subtrai = (v1, v2) => v1 - v2;
const multiplica = (v1, v2) => v1 * v2;
const divide = (v1, v2) => v1 / v2;

// Exportando múltiplos elementos
// module.exports = { soma, subtrai, multiplica, divide };

// Exportando múltiplos elementos
module.exports = { subtrai, multiplica, divide }; 
export { soma, subtrai, multiplica, divide };

// Exportando um único elemento
export default soma;
module.exports = sum; 
