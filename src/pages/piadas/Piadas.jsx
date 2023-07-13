import { useState, useEffect } from "react";

export default function Piadas() {
  const [piadas, setPiadas] = useState([]);
  console.log(piadas)

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((data) => setPiadas(data));
  }, []);

  return (
    <div>
      <h1>Piadas</h1>
      <ul>
        {piadas.map((piada) => (
          <li key={piada.id}>{piada.setup}</li>
        ))}
      </ul>
    </div>
  );
}
