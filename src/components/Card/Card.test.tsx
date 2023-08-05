import { screen } from "@testing-library/react";
import { filmMock, filmsMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import Card from "./Card";
import titles from "../../utils/titles";

describe("Given a Card component", () => {
  describe("When it receives a film", () => {
    test("Then it should show the title, the poster and the release date of the film", () => {
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
  describe("When it receives a film with a null posterPath", () => {
    test(`Then it should show an image with the altText ${titles.missingPosterPath}`, () => {
      const film = filmsMock[1];
      const expectedAltText = titles.missingPosterPath;

      renderWithProviders(<Card film={film} />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
