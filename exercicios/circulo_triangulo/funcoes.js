const PI = Math.PI;

const areaCirculo = (raio) => {
    return (PI * (raio ** 2));
}

const ehTriangulo = (l1, l2, l3) => {
    if (l1 + l2 > l3 || l1 + l3 > l2 || l2 + l3 > l1){
        return true
    } else{
        return 'Não é triangulo'
    }
}

const tipoTriangulo = (l1, l2, l3) => {
    const condicaoTriangulo = ehTriangulo(l1, l2, l3);

    if (condicaoTriangulo === true){
        if (l1 === l2 && l2 === l3){
            return 'Equilátero'
        } else if (l1 === l2 || l2 === l3 || l1 === l3){
            return 'Isósceles'
        }else{
            return 'Escaleno'
        }
    }
}

export { areaCirculo, tipoTriangulo }