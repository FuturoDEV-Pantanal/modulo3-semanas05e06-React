import { render, screen } from "@testing-library/react";
import Piadas from "./Piadas";

describe("Piadas", () => {
  test("deveria renderizar a lista de piadas", async () => {
    render(<Piadas />);

    const primeiraPiada = await screen.findByText(
      "Why do pirates not know the alphabet?"
    );

    expect(primeiraPiada).toBeInTheDocument();
  });
});
