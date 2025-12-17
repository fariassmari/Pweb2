"use client";

import { useState } from "react";

export default function Formulario6() {
    const [cep, setCep] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');
    const [data, setData] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setData(null);

        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await response.json();

            if (dados.erro){
                setError('CEP inválido');
                return;
            }

            if (!response.ok){
                throw new Error('Erro de rede');
            }

            setData(dados);
        } catch (err){
            setError('Erro ao conectar com API!')
        } finally{
            setLoading(false);
        }
    }


    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Validação CEP
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="CEP (12345-678)"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"/>
                <button type="submit" className="rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700">Enviar</button>

                {loading && <p className="mt-4 text-sm text-zinc-500">Carregando...</p>}

                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
                {data && <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                    <p><strong>Rua:</strong> {data.logradouro}</p>
                    <p><strong>Bairro:</strong> {data.bairro}</p>
                    <p><strong>Cidade:</strong> {data.localidade}</p>
                    <p><strong>Estado:</strong> {data.uf}</p>
                </div>}
            </form>
        </div>
    );
}