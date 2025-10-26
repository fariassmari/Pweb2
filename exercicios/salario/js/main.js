import { calcularAumentoSalarial } from './funcoes.js';

const formatBRL = (valor) => {
    if (typeof valor !== 'number' || isNaN (valor))return 'R$ 0,00';
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

document.getElementById('btn-calcular').addEventListener("click", main)

function main() {
    const salarioInput = document.getElementById('salario-atual');
    let valorDigitado = salarioInput.value.trim();

    // Substitui vírgula por ponto, caso o usuário digite 1200,00
    valorDigitado = valorDigitado.replace(',', '.');

    const salario = parseFloat(valorDigitado);
    
    if (isNaN(salario) || salario <= 0){
        alert("ERRO: Por favor, digite um valor de salário válido e maior que zero.");
        document.getElementById('resultado-container').style.display = 'none';
        return;
    }

    const resultados = calcularAumentoSalarial(salario);

    document.getElementById('saida-salario-anterior').innerHTML = formatBRL(resultados.salarioAntes);
    document.getElementById('saida-percentual').innerHTML = resultados.percentual + '%';
    document.getElementById('saida-aumento').innerHTML = formatBRL(resultados.valorAumento);
    document.getElementById('saida-novo-salario').innerHTML = formatBRL(resultados.novoSalario);

    const resultado = document.getElementById('resultado-container');
    resultado.style.display = 'block';
    resultado.classList.remove('hidden', 'opacity-0');
    resultado.classList.add('opacity-100', 'transition-opacity', 'duration-500');  
}
