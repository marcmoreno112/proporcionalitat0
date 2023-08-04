import { screen } from "@testing-library/react";
import pageTitles from "../../utils/pageTitles";
import { renderWithProviders } from "../../utils/testUtils";
import SearchPage from "./SearchPage";

describe("Given a SearchPage page", () => {
  describe("When it is rendered", () => {
    test(`Then it should show a ${pageTitles.search} title`, () => {
      const expectedTitle = pageTitles.search;

      renderWithProviders(<SearchPage />);

      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
