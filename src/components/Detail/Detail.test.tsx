import { vi } from "vitest";
import { filmMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import Detail from "./Detail";
import { screen } from "@testing-library/react";

describe("Given a Detail component", () => {
  describe("When it receives a film", () => {
    test("Then it should show the title and the poster of the film", () => {
      const film = filmMock;
      const expectedTitle = film.title;
      const expectedAltText = film.title;
      const closeAction = vi.fn();
      const sendAction = vi.fn();

      renderWithProviders(
        <Detail film={film} closeAction={closeAction} sendAction={sendAction} />
      );

      const title = screen.getByText(expectedTitle);

      const image = screen.getByAltText(expectedAltText);

      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
  });
});
