import { screen } from "@testing-library/react";
import { filmsMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it receives a list of films", () => {
    test("Then it should show the title of the second one", () => {
      const films = filmsMock;

      const expectedTitle = films[1].filmTitle;

      renderWithProviders(<CardList films={films} />);

      const resultTitle = screen.getByRole("heading", { name: expectedTitle });

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
