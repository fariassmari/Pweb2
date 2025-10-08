class Empresa{
    constructor(nome, fundacao, industria){
        this.nome = nome;
        this.fundacao = fundacao;
        this.industria = industria;
    }
};

const amazon = new Empresa('Amazom', '1994', 'E-Commerce, Cloud');
const facebook = new Empresa('Facebook', '2004', 'Social');
const alphabet = new Empresa('Alphabet Inc.', '2015', 'Search, Cloud, Advertising');

const companias = [amazon, facebook, alphabet];

for (let compania of companias){
    compania.kind = "Internet company"
}

function exibir(companias){
    companias.sort((a, b) => a.nome.localeCompare(b.name));

    for (let compania of companias){
        const dots = ".".repeat(15 - compania.nome.length);
        console.log(`${compania.nome}${dots}${compania.fundacao}`); 
    }
}

exibir(companias);