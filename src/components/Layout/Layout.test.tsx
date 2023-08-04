import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alternative text 'Films logo'", () => {
      const expectedAltText = "Films logo";

      renderWithProviders(<Layout />);

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
