class Exame {
    constructor(peso, gabarito){
        this.peso = peso;
        this.gabarito = gabarito;
        this.respostasEstudantes = [];
    }

    add(respostasDoEstudante){
        let totalNota = 0;
        for (let i = 0; i < this.gabarito.length; i++){
            if (respostasDoEstudante[i] === this.gabarito[i]){
                totalNota += this.peso[i];
            }
        }
        this.respostasEstudantes.push(totalNota);
        return totalNota;
    }

    // Calcular a media de todas as notas de cada estudante
    avgMedia(){
        if (this.respostasEstudantes.length === 0) return 0;

        const totalSoma = this.respostasEstudantes.reduce((sum, nota) => sum + nota, 0);

        return (totalSoma / this.respostasEstudantes.length).toFixed(2); 

    }

    // Retornar as tres menores notas
    min(n) {
        let ordenarNotas = this.respostasEstudantes.slice();
        ordenarNotas.sort(function(a,b){ return a-b; });
        return ordenarNotas.slice(0,n);
    }

    // Retornar as tres maiores notas
    max(n){
        let ordenarNotas = this.respostasEstudantes.slice();
        ordenarNotas.sort(function(a,b){return b-a;});
        return ordenarNotas.slice(0,n);
    }

    // Retornar as notas menores do que 5
    it(){
        let notasMenores5 = []
        for (let nota of this.respostasEstudantes){
            if (nota < 5){
                notasMenores5.push(nota);
                }
        }
        return notasMenores5
    }

    // Retornar as notas maiores do que 5
    gt(){
        let notasMaiores5 = []
        for (let nota of this.respostasEstudantes){
            if (nota > 5){
                notasMaiores5.push(nota);
                }
        }
        return notasMaiores5
    }
};

export { Exame };
