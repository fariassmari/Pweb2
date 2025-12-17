"use client";

import { useEffect, useState } from "react";

export default function Formulario8() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 GET – listar usuários
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // 🔹 POST – adicionar usuário
  async function handleAddUser(e) {
    e.preventDefault();

    if (!name || !email) {
      setError("Preencha nome e email");
      return;
    }

    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        }
      );

      const newUser = await response.json();

      // Simula inserção no frontend
      setUsers((prev) => [...prev, newUser]);

      setName("");
      setEmail("");
    } catch (err) {
      setError("Erro ao adicionar usuário");
    }
  }

  // 🔹 DELETE – remover usuário
  async function handleDeleteUser(id) {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        }
      );

      // Remove do estado
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError("Erro ao remover usuário");
    }
  }

  return (
    <div className="max-w-lg space-y-4 rounded-xl bg-white p-6 shadow dark:bg-zinc-900">
      <h2 className="text-xl font-semibold">CRUD de Usuários</h2>

      {/* FORM */}
      <form onSubmit={handleAddUser} className="flex gap-2">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 rounded border px-3 py-2 dark:border-zinc-700"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded border px-3 py-2 dark:border-zinc-700"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add
        </button>
      </form>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {/* LISTA */}
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center justify-between rounded border p-2 dark:border-zinc-700"
            >
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-zinc-500">{user.email}</p>
              </div>

              <button
                onClick={() => handleDeleteUser(user.id)}
                className="text-sm text-red-500 hover:underline"
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}