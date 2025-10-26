export function calcularAumentoSalarial(salario){
    let percentualAumento = 0
    if (salario <= 280){
        percentualAumento = 20;
    } else if (salario > 280 && salario <= 700){
        percentualAumento = 15;
    } else if (salario > 700 && salario <= 1500){
        percentualAumento = 10;
    }else{
        percentualAumento = 5;
    }

    const reajuste = salario * (percentualAumento/100);
    const novoSalario = salario + reajuste;

    return {
        salarioAntes: salario,
        percentual: percentualAumento,
        valorAumento: reajuste,
        novoSalario: novoSalario
    };

     
}