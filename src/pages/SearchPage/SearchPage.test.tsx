import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import titles from "../../utils/titles";
import { renderWithProviders } from "../../utils/testUtils";
import SearchPage from "./SearchPage";
import { mockTitleText } from "../../mocks/filmsMocks";

describe("Given a SearchPage page", () => {
  describe("When it is rendered", () => {
    test(`Then it should show a ${titles.searchPage} title`, () => {
      const expectedTitle = titles.searchPage;

      renderWithProviders(<SearchPage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });

    test("Then the ScrollToTopButton should not be rendered", () => {
      renderWithProviders(<SearchPage />);

      const expectedAlText = titles.arrowUpAltText;

      const arrowUpImage = screen.queryByAltText(expectedAlText);

      expect(arrowUpImage).not.toBeInTheDocument();
    });
  });

  describe(`When it is rendered and the user types the text ${mockTitleText} in the search bar`, () => {
    test("Then it should show a film with the text inside its title", async () => {
      const inputText = mockTitleText;
      const expectedPlaceholder = titles.searchInputPlaceholder;
      const expectedTitle = /mario/i;

      renderWithProviders(<SearchPage />);
      const input = screen.getByPlaceholderText(expectedPlaceholder);
      await userEvent.type(input, inputText);
      const title = await screen.getAllByRole("heading");

      expect(title[title.length - 1]).toContain(expectedTitle);
    });
  });
});
