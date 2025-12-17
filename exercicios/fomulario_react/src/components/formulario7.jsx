"use client";

import { useState } from "react";

export default function Formulario7() {
    const [usuario, setUsuario] = useState({
        nome: "",
        email: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [resposta, setResposta] = useState(null);

    function handleChange(e){
        const {name, value} = e.target;
        setUsuario(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResposta(null);

        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(usuario),
            }
        );
            if (!response.ok){
                throw new Error('Erro ao enviar dados!');
            }

            const dados = await response.json();
            setResposta(dados);
            
        } catch (err){
            setError('Erro ao conectar com API!')
        } finally{
            setLoading(false);
        }
    }


    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Cadastro POST
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" name="nome" placeholder="Nome" value={usuario.nome}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"/>

                <input type="text" name="email" placeholder="Email" value={usuario.email}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"/>

                <button type="submit" disabled={loading} className="rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700">{loading ? "Enviando..." : "Enviar"}</button>
            </form>
            {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
            {resposta && <div className="mt-4 space-y-1 text-sm text-zinc-700 dark:text-zinc-200">
                <p className="font-medium">Resposta da API:</p>
                <pre className="mt-2 text-xs">
                    {JSON.stringify(resposta, null, 2)}
                </pre>
            </div>}
        </div>
    );
}