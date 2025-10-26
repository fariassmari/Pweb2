import { soma, subtracao, multiplicacao, divisao, porcentagem } from "./funcoes.js";

let operacao = null;
let novoNumero = true;
let valorAnterior = null;
let valorAtual = 0;

const atualizarDisplay = (vAnterior = valorAnterior, vAtual = valorAtual, op = operacao)  => {
    const superior = document.getElementById('display-top');
    const inferior = document.getElementById('display-bottom');
    

    if (op && vAnterior !== null){
        superior.innerHTML = `${vAnterior} ${op}`;
    }else{
        superior.innerHTML = '';
    }

    inferior.innerHTML = vAtual;

};

const calcular = () =>{
    if (valorAnterior === null || operacao === null) return;
    const n1 = parseFloat(valorAnterior);
    const n2 = parseFloat(valorAtual);
    let resultado = 0;

    switch (operacao){
        case '+': resultado = soma(n1, n2); break;
        case '-': resultado = subtracao(n1, n2); break;
        case 'X': resultado = multiplicacao(n1, n2); break;
        case '/': resultado = divisao(n1, n2); break;
        case '%': resultado = porcentagem(n1, n2); break;
        default: return;
    }

    valorAtual = resultado.toString();
    operacao = null;
    valorAnterior = nul;
    novoNumero = true;
    atualizarDisplay();
};

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const numero = btn.innerHTML;
        if (novoNumero){
            valorAtual = numero;
            novoNumero = false;
        }else{
            if (valorAtual === '0')
                valorAtual = numero
            else{
                valorAtual += numero 
            }
        }
        atualizarDisplay();
    });
});

document.querySelectorAll('.btn-op').forEach(btn => {
    btn.addEventListener('click', () => {
        if (valorAnterior !== null && !novoNumero){
            calcular();
        }
        operacao = btn.innerHTML;
        valorAnterior = parseFloat(valorAtual);
        novoNumero = true;
    });
});

document.querySelector('.btn-igual').addEventListener('click', () => {
    calcular();
    operacao == null;
});



