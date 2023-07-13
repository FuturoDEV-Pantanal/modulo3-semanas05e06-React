import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Contador from "./Contador";

const usuario = userEvent.setup();

describe("Contador", () => {
  test("deveria renderizar a logo do React", () => {
    render(<Contador />);

    const logo = screen.getByRole("img", { name: "React logo" });
    expect(logo).toBeInTheDocument();
  });

  test("deveria renderizar o título", () => {
    render(<Contador />);

    const titulo = screen.getByText("Vite + React");
    expect(titulo).toBeInTheDocument();
  });

  test("deveria existir um botão Contador: 0", () => {
    render(<Contador />);

    const botao = screen.getByRole("button", { name: "Contador: 0" });
    expect(botao).toBeInTheDocument();
  });

  test("deveria incrementar o contador ao clicar no botão", async () => {
    render(<Contador />);

    const botao = screen.getByRole("button", { name: "Contador: 0" });

    await usuario.click(botao);

    const botaoClicado = screen.getByRole("button", { name: "Contador: 1" });
    expect(botaoClicado).toBeInTheDocument();
  });
});
