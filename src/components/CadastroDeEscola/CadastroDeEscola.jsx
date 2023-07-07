import { useState } from "react";

export default function CadastroDeEscola({ setApareceLista }) {
  const [novaEscola, setNovaEscola] = useState({
    nome: "",
    endereco: "",
    telefone: "",
  });

  function cadastrarEscola(e) {
    e.preventDefault();

    fetch("http://localhost:3003/escolas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaEscola),
    }).then(() => {
      setApareceLista(true);
    });
  }

  return (
    <div>
      <h2>Nova Escola</h2>

      <form onSubmit={cadastrarEscola}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={novaEscola.nome}
          onChange={(e) => {
            setNovaEscola({
              ...novaEscola,
              nome: e.target.value,
            });
          }}
        />

        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          value={novaEscola.endereco}
          onChange={(e) => {
            setNovaEscola({
              ...novaEscola,
              endereco: e.target.value,
            });
          }}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          value={novaEscola.telefone}
          onChange={(e) => {
            setNovaEscola({
              ...novaEscola,
              telefone: e.target.value,
            });
          }}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
