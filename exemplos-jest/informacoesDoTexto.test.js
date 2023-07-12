/*
Exemplo: criar uma função que receba uma string e devolva um objeto com as informações:
1 ) quantos caracteres a string possui,
2) qual seu primeiro caracter e
3) qual seu último caracter
4) testar também se veio todas as informações
*/

function informacoesDoTexto(texto) {
  const numerosDeCaracteres = texto.length;
  const primeiroCaracter = texto[0];
  const ultimoCaracter = texto[texto.length - 1];
  const resultado = { numerosDeCaracteres, primeiroCaracter, ultimoCaracter }
  return resultado
}

describe("informacoesDoTexto", () => {
  test("se o texto for Maria o número de caracteres deve ser 5", () => {
    const resultado = informacoesDoTexto("Maria");
    const resultadoEsperado = 5;

    expect(resultado.numerosDeCaracteres).toBe(resultadoEsperado);
  });

  test("se o texto for Maria o primeiro caracter deve ser M", () => {
    const resultado = informacoesDoTexto("Maria");
    const resultadoEsperado = "M";

    expect(resultado.primeiroCaracter).toBe(resultadoEsperado);
  });

  test("se o texto for Maria o último carcater dever ser a", () => {
    const resultado = informacoesDoTexto("Maria");
    const resultadoEsperado = "a";

    expect(resultado.ultimoCaracter).toBe(resultadoEsperado);
  });

  test("se o texto for Maria o objeto devolvido deverá conter apenas as propriedades numerosDeCaracteres, primeiroCaracter e ultimoCaracter", () => {
    const resultado = informacoesDoTexto("Maria");
    const resultadoEsperado = {
      numerosDeCaracteres: 5,
      primeiroCaracter: "M",
      ultimoCaracter: "a",
    };

    expect(resultado).toEqual(resultadoEsperado);
  });
});
