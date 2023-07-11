import { useState } from "react";
import { api } from "../../utils";

export default function CadastroDeEscolas({ setApareceCadastro }) {
  const escolaVazia = {
    nome: "",
    endereco: "",
    telefone: "",
  };
  const [escola, setEscola] = useState(escolaVazia);
  console.log({ escola });

  const cadastrarEscola = (evento) => {
    evento.preventDefault();

    fetch(`${api}/escolas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(escola),
    }).then(() => setApareceCadastro(false));
  };

  return (
    <div>
      <h2>Cadastro de Escolas</h2>

      <form onSubmit={cadastrarEscola}>
        <input
          type="text"
          placeholder="Nome da escola"
          value={escola.nome}
          onChange={(evento) =>
            setEscola({ ...escola, nome: evento.target.value })
          }
        />

        <input
          type="text"
          placeholder="Endereço"
          value={escola.endereco}
          onChange={(evento) =>
            setEscola({ ...escola, endereco: evento.target.value })
          }
        />

        <input
          type="text"
          placeholder="Telefone"
          value={escola.telefone}
          onChange={(evento) =>
            setEscola({ ...escola, telefone: evento.target.value })
          }
        />

        <button type="submit">Salvar escola</button>
      </form>
    </div>
  );
}
