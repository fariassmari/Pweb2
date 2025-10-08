import { arg } from "mathjs";

export const ehPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true
}

export function gerarPrimos(...args){
    let primos = [];

    if (args.length === 1){
        let quantidade = arg[0];
        let numero = 2;
        while (primos.length < quantidade){
            if (ehPrimo(numero)) primos.push(numero);
            numero++;
        }
    }
    else if (args.length === 2){
        let inicio = args[0];
        let fim = args[1];
        for (let numero = inicio; numero <= fim; numero++){
            if (ehPrimo(numero)) primos.push(numero)
        }
    }
    return primos;
}