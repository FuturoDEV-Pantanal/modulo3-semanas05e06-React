import { useState } from "react";

/*
{
  "id": "abc",
  "nome": "Escola ABC",
  "endereco": "Rua ABC, 123",
  "telefone": "1234-5678"
}
*/

export default function CadastroDeEscolas({ setApareceCadastro }) {
  const escolaVazia = {
    nome: "",
    endereco: "",
    telefone: "",
  };
  const [escola, setEscola] = useState(escolaVazia);
  console.log({ escola });

  return (
    <div>
      <h2>Cadastro de Escolas</h2>

      <form onSubmit={() => setApareceCadastro(false)}>
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
          onChange={(evento) => setEscola({ ...escola, telefone: evento.target.value })}
        />

        <button type="submit">Salvar escola</button>
      </form>
    </div>
  );
}
