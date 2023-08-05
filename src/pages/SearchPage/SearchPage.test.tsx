import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import pageTitles from "../../utils/pageTitles";
import { renderWithProviders } from "../../utils/testUtils";
import SearchPage from "./SearchPage";
import { mockTitleText } from "../../mocks/filmsMocks";
import placeholders from "../../utils/placeholders";

describe("Given a SearchPage page", () => {
  describe("When it is rendered", () => {
    test(`Then it should show a ${pageTitles.search} title`, () => {
      const expectedTitle = pageTitles.search;

      renderWithProviders(<SearchPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
  describe(`When it is rendered and the user types the text ${mockTitleText} in the search bar`, () => {
    test("Then it should show a film with the text inside its title", async () => {
      const inputText = mockTitleText;
      const expectedPlaceholder = placeholders.searchInput;

      renderWithProviders(<SearchPage />);

      const input = screen.getByPlaceholderText(expectedPlaceholder);

      await userEvent.type(input, inputText);

      const expectedTitle = /mario/i;

      const title = await screen.getAllByText(expectedTitle);

      expect(title[0]).toBeInTheDocument();
    });
  });
});
