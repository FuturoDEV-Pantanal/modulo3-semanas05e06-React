import React from "react";

export default function CadastroDeEscola({ setApareceLista }) {
  return (
    <div>
      <h2>Nova Escola</h2>
      <form></form>
      <button
        onClick={() => {
          setApareceLista(true);
        }}
      >
        Salvar
      </button>
    </div>
  );
}
