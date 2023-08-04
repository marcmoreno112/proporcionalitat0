import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Films logo'", () => {
      const expectedAltText = "Films logo";

      renderWithProviders(<Header />);

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
