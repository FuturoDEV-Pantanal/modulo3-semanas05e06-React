import { useState, useEffect } from "react";

function Escolas() {
  const [escolas, setEscolas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/escolas")
      .then((res) => res.json())
      .then((res) => setEscolas(res));
  }, [])

  return (
    <>
      <ul>
        {escolas.map((escola) => (
          <li key={escola.id}>{escola.nome}</li>
        ))}
      </ul>
    </>
  );
}

export default Escolas;
