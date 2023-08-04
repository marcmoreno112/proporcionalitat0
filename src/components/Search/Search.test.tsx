import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import placeholders from "../../utils/placeholders";
import { renderWithProviders } from "../../utils/testUtils";
import Search from "./Search";

describe("Given a Search component", () => {
  describe("When it is rendered", () => {
    test(`Then it should show an input with the ${placeholders.searchInput}`, () => {
      const expectedPlaceholder = placeholders.searchInput;

      renderWithProviders(<Search />);

      const input = screen.getByPlaceholderText(expectedPlaceholder);

      expect(input).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the user types 'Super Mario' in the input", () => {
    test("Then it should show the text 'Super Mario' inside of the input", async () => {
      const inputText = "Super Mario";
      const expectedPlaceholder = placeholders.searchInput;

      renderWithProviders(<Search />);

      const input = screen.getByPlaceholderText(expectedPlaceholder);

      await userEvent.type(input, inputText);

      expect(input).toHaveValue(inputText);
    });
  });
});
