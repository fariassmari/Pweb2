class Cep{
    constructor(cep, logradouro, complemento, bairro, localidade, uf, unidade, ibge, gia){
        this.cep = cep;
        this.logradouro = logradouro;
        this.complemento = complemento;
        this.bairro = bairro;
        this.localidade = localidade;
        this.uf = uf;
        this.unidade = unidade;
        this.ibge = ibge;
        this.gia = gia;
    }
}

/// MAIN

const cep1 = new Cep(
    "01001-000",
    "Praça da Sé",
    "lado ímpar",
    "Sé",
    "São Paulo",
    "SP",
    "",
    "3550308",
    "1004"
);

console.log(cep1)