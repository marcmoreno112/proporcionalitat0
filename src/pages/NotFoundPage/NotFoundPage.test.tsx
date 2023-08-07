import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import titles from "../../utils/titles";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test(`Then it should a ${titles.notFoundPage} title`, () => {
      const expectedTitle = titles.notFoundPage;

      renderWithProviders(<NotFoundPage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
