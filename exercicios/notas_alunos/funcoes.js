export function calcularMedia(){
    const notas = Array.from(arguments);
    const numeroDeArgumentos = notas.length;

    let soma = 0;
    let mediaBimestral = 0;

    if (numeroDeArgumentos === 4){
        for (let i = 0; i < notas.length; i++){
            soma += notas[i];
        }
        mediaBimestral = soma / notas.length;

        return mediaBimestral;

    }else if(numeroDeArgumentos === 5){
        const notasBimestrais = notas.slice(0,4);
        const somaBimestral = notasBimestrais.reduce((acc, nota)=> acc + nota, 0);
        const mediaBimestal = somaBimestral / 4;

        let notaFinal = notas[4];

        const mediaFinal = (mediaBimestal + notaFinal) / 2;

        return mediaFinal;

    }else{
        console.error("ERRO: A função deve receber 4 (bimestrais) ou 5 (bimestrais + AF) notas.");
        
        return 0;
    }
};