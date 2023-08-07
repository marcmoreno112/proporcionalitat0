import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { filmMock } from "../../mocks/filmsMocks";
import { renderWithProviders } from "../../utils/testUtils";
import Detail from "./Detail";

describe("Given a Detail component", () => {
  describe("When it receives a film", () => {
    test("Then it should show the title and the poster of the film", () => {
      const film = filmMock;
      const expectedTitle = film.title;
      const expectedAltText = film.title;

      renderWithProviders(<Detail film={film} />);

      const title = screen.getByText(expectedTitle);

      const image = screen.getByAltText(expectedAltText);

      expect(title).toBeInTheDocument();
      expect(image).toBeInTheDocument();
    });

    test("Then it should show the close button and the disabled send button", () => {
      const film = filmMock;
      const expectedCloseButtonText = "Close";
      const expectedSaveButtonText = "Save";

      renderWithProviders(<Detail film={film} />);

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

  describe("When it receives a film, the user selects a rate number, then types a comment and clicks the save button", () => {
    test("Then it should call the sendAction", async () => {
      const film = filmMock;
      const expectedSaveButtonText = "Save";
      const expectedCommentLabel = "Comment";

      renderWithProviders(<Detail film={film} />);

      const rating = screen.getByRole("combobox");

      await userEvent.selectOptions(rating, "1");

      const comment = screen.getByRole("textbox", {
        name: expectedCommentLabel,
      });

      await userEvent.type(comment, "any text");

      const saveButton = screen.getByRole("button", {
        name: expectedSaveButtonText,
      });

      expect(saveButton).toBeEnabled();
    });
  });
});
