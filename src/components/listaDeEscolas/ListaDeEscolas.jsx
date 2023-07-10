import { useState, useEffect } from "react";
import { api } from '../../utils'

export default function ListaDeEscolas({ setApareceCadastro }) {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(`${api}/escolas`)
      .then((resposta) => resposta.json())
      .then((dados) => setLista(dados));
  }, [])

  return (
    <div>
      <h2>Lista de Escolas</h2>

      <div>
        {lista.map((escola) => (
          <p key={escola.id}>
            {escola.nome} - {escola.telefone}
          </p>
        ))}
      </div>

      <button onClick={() => setApareceCadastro(true)}>
        Criar nova escola
      </button>
    </div>
  );
}
