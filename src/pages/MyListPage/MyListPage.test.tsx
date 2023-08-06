import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import titles from "../../utils/titles";
import MyListPage from "./MyListPage";

describe("Given a MyListPage page", () => {
  describe("When it is rendered", () => {
    test(`Then it should a ${titles.myList} title`, () => {
      const expectedTitle = titles.myList;

      renderWithProviders(<MyListPage />);
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
