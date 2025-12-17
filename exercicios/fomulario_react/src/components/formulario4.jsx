"use client";

import { useState } from "react";

export default function Formulario4() {
    const [cpf, setCpf] = useState('');
    const [cep, setCep] = useState('');
    const [error, setError] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        const novoError = {}; 

        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const cepRegex = /^\d{5}-\d{3}$/;

        if (!cpfRegex.test(cpf)){
            novoError.cpf = "CPF inválido (ex: 123.456.789-00)";
        }

        if (!cepRegex.test(cep)){
            novoError.cep = "CEP inválido (ex: 12345-678)";
        }


        if (Object.keys(novoError).length > 0){
            setError(novoError);
            return;
        }

        setError({});
        console.log("CPF:", cpf, "CEP:", cep);
    }


    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Validação CPF e CEP
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                type="text"
                placeholder="CPF (123.456.789-00)"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error.cpf && (<p className="mt-1 text-sm text-red-500">{error.cpf}</p>)}
                

                <input
                type="text"
                placeholder="CEP (12345-678)"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error.cep && (<p className="mt-1 text-sm text-red-500">{error.cep}</p>)}

                <button
                type="submit"
                className="rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                >
                Enviar
                </button>
            </form>
        </div>
    );
}