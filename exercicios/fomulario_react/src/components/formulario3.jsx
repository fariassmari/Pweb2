"use client";

import { useState } from "react";

export default function Formulario3() {
    const [user, setUser] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const [error, setError] = useState({});


    function handleChange(e) {
        const { name, value } = e.target;

        setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const novoError = {}; 

        if (!user.nome.trim()){
            novoError.nome = 'Nome obrigatorio'
        }

        if (!user.email.includes("@")){
            novoError.email = 'Email inválido'
        }

        if (user.senha.length < 6){
            novoError.senha ='Senha deve ter mais de 6 digitos'
        }

        if (Object.keys(novoError).length > 0){
            setError(novoError);
            return;
        }

        setError({});
        console.log("Dados do usuário:", user);
    }


    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
                Cadastro
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={user.nome}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error.nome && (<p className="mt-1 text-sm text-red-500">{error.nome}</p>)}
                

                <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={user.email}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error.email && (<p className="mt-1 text-sm text-red-500">{error.email}</p>)}

                <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={user.senha}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />
                {error.senha && (<p className="mt-1 text-sm text-red-500">{error.senha}</p>)}

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