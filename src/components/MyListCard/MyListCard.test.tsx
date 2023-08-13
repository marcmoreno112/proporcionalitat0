import { screen } from "@testing-library/react";
import { ratedFilmMock, ratedFilmsMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import titles from "../../utils/titles";
import MyListCard from "./MyListCard";

describe("Given a MyListCard component", () => {
  describe("When it receives a film", () => {
    test("Then it should show the title, the poster and the release date of the film", () => {
      const film = ratedFilmMock;
      const expectedTitle = film.title;
      const expectedAltText = film.title;
      const expectedReleaseDate = `Release: ${film.release_date}`;

      renderWithProviders(<MyListCard film={film} isLazy="eager" />);

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
      const film = ratedFilmsMock[1];
      const expectedAltText = titles.missingPosterPath;

      renderWithProviders(<MyListCard film={film} isLazy="eager" />);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
