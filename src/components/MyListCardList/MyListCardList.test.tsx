import { screen } from "@testing-library/react";
import { ratedFilmsMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import MyListCardList from "./MyListCardList";

describe("Given a MyListCardList component", () => {
  describe("When it receives a list of films", () => {
    test("Then it should show the title of the second one", () => {
      const films = ratedFilmsMock;

      const expectedTitle = films[1].title;

      renderWithProviders(<MyListCardList films={films} />);

      const resultTitle = screen.getByText(expectedTitle);

      expect(resultTitle).toBeInTheDocument();
    });
  });
});
