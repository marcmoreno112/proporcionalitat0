import { screen } from "@testing-library/react";
import { mockRouterProvider, renderWithProviders } from "../../utils/testUtils";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should a 'Search' link and a 'My list' link", () => {
      const expectedSearchLinkText = "Search";
      const expectedMylistLinkText = "My list";

      renderWithProviders(mockRouterProvider(<Navbar />));

      const searchLink = screen.getByRole("link", {
        name: expectedSearchLinkText,
      });
      const mylistLink = screen.getByRole("link", {
        name: expectedMylistLinkText,
      });

      expect(searchLink).toBeInTheDocument();
      expect(mylistLink).toBeInTheDocument();
    });
  });
});
