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
});
