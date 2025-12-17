"use client";

import { useState } from "react";

export default function Home() {
  const [endereco, setEndereco] = useState({
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    estado: "",
    cidade: "",
  });

  async function handleChange(e) {
    const { name, value } = e.target;

    // Atualiza o campo digitado
    setEndereco((prev) => ({ ...prev, [name]: value }));

    // Se for CEP e tiver 8 dígitos → busca na API
    if (name === "cep" && value.length === 8) {
      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${value}/json/`
        );
        const data = await response.json();

        if (data.erro) return;

        setEndereco((prev) => ({
          ...prev,
          rua: data.logradouro || "",
          bairro: data.bairro || "",
          estado: data.uf || "",
          cidade: data.localidade || "",
        }));
      } catch (err) {
        console.error("Erro ao buscar CEP");
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-verde">
      <div className="rounded-2xl border border-branco p-5 px-10">
        <h1 className="p-3 text-4xl font-bold">Cadastro de Endereço</h1>

        <form className="flex flex-col gap-3">
          {[
            ["cep", "CEP"],
            ["rua", "Rua"],
            ["numero", "Número"],
            ["bairro", "Bairro"],
            ["estado", "Estado"],
            ["cidade", "Cidade"],
          ].map(([campo, label]) => (
            <div key={campo} className="flex flex-col gap-1">
              <label className="font-bold">{label}:</label>
              <input
                type="text"
                name={campo}
                value={endereco[campo]}
                onChange={handleChange}
                placeholder={`Informe ${label}`}
                className="rounded-xl border border-branco p-2"
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}