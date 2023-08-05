import { screen } from "@testing-library/react";
import { filmMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it receives a film", () => {
    test("Then it should show the title of the film", () => {
      const film = filmMock;
      const expectedTitle = film.title;
      const expectedAltText = film.title;
      const expectedReleaseDate = film.release_date;

      renderWithProviders(<Card film={film} />);

      const title = screen.getByText(expectedTitle);

      const altText = screen.getByAltText(expectedAltText);

      const releaseDate = screen.getByText(expectedReleaseDate);

      expect(title).toBeInTheDocument();
      expect(altText).toBeInTheDocument();
      expect(releaseDate).toBeInTheDocument();
    });
  });
});
