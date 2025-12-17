"use client"

import { useState } from "react";

export default function Formulario(){
    const [nome, setNome] = useState('');
 
    function handleSubmit(e){
        e.preventDefault();
        alert(`Nome enviado: ${nome}`);
    }

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">Formulário</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:text-zinc-100 dark:placeholder-zinc-500"/>

                <button type="submit" className="rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700 active:scale-95">Enviar</button>
            </form>

            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Texto digitado:
                <span className="ml-1 font-semibold text-zinc-900 dark:text-zinc-100">
                {nome || "—"}
                </span>
            </p>
        </div>
    );
}
