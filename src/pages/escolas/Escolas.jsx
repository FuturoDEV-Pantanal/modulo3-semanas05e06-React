import { useState } from "react";
import ListaDeEscolas from "../../components/ListaDeEscolas/ListaDeEscolas";
import CadastroDeEscola from "../../components/CadastroDeEscola/CadastroDeEscola";

function Escolas() {
  const [apareceLista, setApareceLista] = useState(true);

  return (
    <>
      {apareceLista === true && (
        <ListaDeEscolas setApareceLista={setApareceLista} />
      )}

      {apareceLista === false && (
        <CadastroDeEscola setApareceLista={setApareceLista} />
      )}
    </>
  );
}

export default Escolas;
