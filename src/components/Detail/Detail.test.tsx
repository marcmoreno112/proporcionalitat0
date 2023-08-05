import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
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
      const saveAction = vi.fn();

      renderWithProviders(
        <Detail film={film} closeAction={closeAction} saveAction={saveAction} />
      );

      const title = screen.getByText(expectedTitle);

      const image = screen.getByAltText(expectedAltText);

      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });
    test("Then it should show the close button and the disabled send button", () => {
      const film = filmMock;
      const closeAction = vi.fn();
      const saveAction = vi.fn();
      const expectedCloseButtonText = "Close";
      const expectedSaveButtonText = "Save";

      renderWithProviders(
        <Detail film={film} closeAction={closeAction} saveAction={saveAction} />
      );

      const closeButton = screen.getByRole("button", {
        name: expectedCloseButtonText,
      });

      const saveButton = screen.getByRole("button", {
        name: expectedSaveButtonText,
      });

      expect(closeButton).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();
      expect(saveButton).toBeDisabled();
    });
  });
  describe("When it receives a film and the user clicks the close button", () => {
    test("Then it should call the closeAction", async () => {
      const film = filmMock;
      const expectedCloseButtonText = "Close";
      const closeAction = vi.fn();
      const saveAction = vi.fn();

      renderWithProviders(
        <Detail film={film} closeAction={closeAction} saveAction={saveAction} />
      );

      const closeButton = screen.getByRole("button", {
        name: expectedCloseButtonText,
      });

      await userEvent.click(closeButton);

      expect(closeAction).toHaveBeenCalled();
    });
  });
});
