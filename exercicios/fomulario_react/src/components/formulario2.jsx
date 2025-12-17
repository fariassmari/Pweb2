"use client";

import { useState } from "react";

export default function Formulario2() {
    const [user, setUser] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
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

                <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={user.email}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />

                <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={user.senha}
                onChange={handleChange}
                className="rounded-lg border border-zinc-300 bg-transparent px-4 py-2 dark:border-zinc-700"
                />

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