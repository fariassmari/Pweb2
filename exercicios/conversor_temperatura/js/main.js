import { conversor } from './funcoes.js'

document.getElementById('btn-calcular').addEventListener('click', main);

function main(){
    const temperaturaInput = parseFloat(document.getElementById('valor-temperatura').value);
    const temperaturaTipo = parseInt(document.getElementById('tipo-conversao').value);
    const resultadoContainer = document.getElementById('resultado-container');
    const saidaResultado = document.getElementById('saida-resultado');

    if (isNaN(temperaturaInput)){
        saidaResultado.textContent = 'Por favor, insira uma temperatura válida.';
    }else{
        const resultadoTexto = conversor(temperaturaTipo, temperaturaInput);
        saidaResultado.textContent = resultadoTexto
    }

    resultadoContainer.style.display = 'block';
    resultadoContainer.classList.remove('hidden', 'opacity-0');
    resultadoContainer.classList.add('opacity-100', 'transition-opacity', 'duration-500');
}