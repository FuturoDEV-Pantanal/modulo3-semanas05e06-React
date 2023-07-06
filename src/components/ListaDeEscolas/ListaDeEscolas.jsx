import { useState, useEffect } from "react";

export default function ListaDeEscolas({ setApareceLista }) {
  const [escolas, setEscolas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/escolas")
      .then((res) => res.json())
      .then((res) => setEscolas(res));
  }, []);

  return (
    <div>
      <h2>Lista de Escolas</h2>
      <ul>
        {escolas.map((escola) => (
          <li key={escola.id}>{escola.nome}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setApareceLista(false);
        }}
      >
        Nova Escola
      </button>
    </div>
  );
}
