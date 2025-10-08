const format = n => n.toString().padStart(2, "0");

const serieNumericasCrescente = (inicio = 0, fim = 99, grupo = 10) => {
    let linha = "";
    for (let flag = inicio; flag <= fim; flag++) {
        linha += format(flag) + " ";
        if ((flag - inicio + 1) % grupo === 0){
            console.log(linha.trim());
            linha = "";
        }
    }
};

const serieNumericasDecrescente = (inicio = 99, fim = 0, grupo = 10) => {
    let linha = "";
    for (let flag = inicio; flag >= fim; flag--) {
        linha += format(flag) + " ";
        if ((inicio - flag + 1) % grupo === 0) {
            console.log(linha.trim());
            linha = "";
        }
    }
};

const serieNumericasImpares = (inicio = 99, fim = 1, grupo = 5) => {
    let linha = "";
    let count = 0;
    for (let flag = inicio; flag >= fim; flag -= 2){
        linha += format(flag) + " ";
        count++;
        if (count % grupo === 0){
            console.log(linha.trim());
            linha = "";
        }
    }
};

export { serieNumericasCrescente, serieNumericasDecrescente, serieNumericasImpares };