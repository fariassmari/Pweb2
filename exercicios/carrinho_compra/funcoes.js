// Calcula o subtotal de cada produto
export function subtotal(produtos) {
    let subtotais = [];
    for (let i = 0; i < produtos.length; i++) {
        let sub = produtos[i][1] * produtos[i][2];
        subtotais.push([produtos[i][0], sub]); // [id, subtotal]
    }
    return subtotais;
}

// Filtra apenas produtos com quantidade > 0
export function validos(produtos) {
    let itensValidos = [];
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i][2] > 0) {
            itensValidos.push(produtos[i]);
        }
    }
    return itensValidos;
}

// Calcula o valor total do carrinho
export function total(produtos) {
    let soma = 0; // inicializa com número
    for (let i = 0; i < produtos.length; i++) {
        soma += produtos[i][1] * produtos[i][2];
    }
    return soma;
}