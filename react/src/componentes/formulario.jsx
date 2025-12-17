"use client"

import { useState } from "react";

export default function ConsultaCep() {
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");

    async function buscarCep(e){
        e.preventDefault();
        setEndereco("");
        setMensagem("");
        
        if (!/^\d{8}$/.test(cep)){
            setErro("Só pode conter números!");
            return;
        }

        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro){
                setErro("CEP não existe!");
                return;
            }

            const { logradouro, bairro, localidade, uf } = data;

            setEndereco(`Endereço encontrado: ${logradouro}, ${numero} - ${bairro}, ${localidade} - ${uf}`);
            setMensagem(`Panetone despachado! Vai chegar quentinho em: ${logradouro}, ${numero} – ${bairro}`)
        } catch (error){
            setMensagem('CEP não existe!')
        }
    }

    return(
        <div className="bg-zinc-900 text-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl border border-zinc-800">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
                <h2 className="text-2xl font-bold text-center text-zinc-800 mb-8">Entrega de Panetone 🎄</h2>
                <form onSubmit={buscarCep} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 text-lg font-medium rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                    <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} className="bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 text-lg font-medium rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"/>
                    <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition">Buscar Endereço</button>
                </form>

                {erro && <p className="text-red-500 mt-4 text-center">{erro}</p>}
                {endereco && <p className="text-green-600 text-center mt-4 text-center font-medium">{endereco}</p>}
                {mensagem && <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-medium"> {mensagem}</div>}
            </div>
        </div>
    )
}