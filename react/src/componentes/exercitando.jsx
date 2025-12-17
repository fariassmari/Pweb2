"use client";

import { useState } from "react";

export default function ConsultaCep(){
    const [erro, setErro] = useState('');
    const [carregamento, setCarregamento] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [endereco, setEndereco] = useState({
        cep: "",
        rua: "",
        numero: "",
        bairro: "",
        estado: "",
        cidade: "",
    });

    function handleChange(e){
        const { name, value } = e.target;
        setEndereco(prev => ({ ...prev, [name]: value }));
    }

    async function buscarCep(e){
        e.preventDefault();
        setErro('');
        setEndereco('');
        setMensagem('');
        setCarregamento(true);
        
        
        if (!/^\d{8}$/.test(endereco.cep)){
            setErro("Só pode conter números!");
            setCarregamento(false);
            return;
        }

        try{
            const resposta = await fetch(`https://viacep.com.br/ws/${endereco.cep}/json/`);
            const dados = await resposta.json();

            if (dados.erro){
                setErro('CEP não encontrado!');
                return;
            }

            setEndereco((prev) => ({
                ...prev,
                rua: dados.logradouro,
                bairro: dados.bairro,
                cidade: dados.localidade,
                estado: dados.uf,
            }));

            setMensagem(`Endereço encontrado: ${dados.logradouro} - ${dados.bairro}, ${dados.localidade}/${dados.uf}`);
        }catch(err){
            setErro('Erro ao carregar APi')
        }finally{
            setCarregamento(false); 
        }
    }
    
    return (
        <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-center text-2xl font-semibold text-zinc-800">
            Formulário
            </h2>

            <form onSubmit={buscarCep} className="flex flex-col gap-4">
            <input type="text" name="cep" placeholder="Digite o CEP" value={endereco.cep} onChange={handleChange} className="rounded-lg border border-zinc-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

            <button type="submit" className="rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60" disabled={carregamento}>
                {carregamento ? "Buscando..." : "Buscar"}
            </button>

            {carregamento && (<p className="text-center text-sm text-zinc-500">Carregando...</p>)}

            {erro && (<p className="text-center text-sm text-red-500">{erro}</p>)}

            {mensagem && (<p className="text-center text-sm text-green-600">{mensagem}</p>)}
            </form>
        </div>
    );
}