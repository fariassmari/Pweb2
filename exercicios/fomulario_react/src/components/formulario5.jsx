"use client";

import { useState } from "react";

export default function Formulario5() {
    const [cep, setCep] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        setMensagem("");
        setError("");

        const cepRegex = /^\d{5}-\d{3}$/;

        if (!cepRegex.test(cep)){
            setError("CEP inválido (ex: 12345-678)");
            return;
        }

        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            if (data.erro){
                setError('CEP não existe');
                return;
            }

            const { logradouro, bairro, localidade, uf } = data;
            setMensagem(`CEP encontrado: ${logradouro}, ${bairro}, ${localidade} - ${uf} `);
        } catch (error){
            setMensagem('CEP não existe!')
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
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error && (<p className="mt-1 text-sm text-red-500">{error}</p>)}

                <button
                type="submit"
                className="rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                >
                Enviar
                </button>

                {mensagem && <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-center font-medium">{mensagem}</div>}
            </form>
        </div>
    );
}