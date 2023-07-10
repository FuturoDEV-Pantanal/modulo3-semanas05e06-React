import { useState } from "react";
import ListaDeEscolas from "../../components/listaDeEscolas/ListaDeEscolas";
import CadastroDeEscolas from "../../components/cadastroDeEscolas/CadastroDeEscolas";

function Escolas() {
  const [apareceCadastro, setApareceCadastro] = useState(false);

  return (
    <>
      {!apareceCadastro && (
        <ListaDeEscolas setApareceCadastro={setApareceCadastro} />
      )}

      {apareceCadastro && (
        <CadastroDeEscolas setApareceCadastro={setApareceCadastro}/>
      )}
    </>
  );
}

export default Escolas;
