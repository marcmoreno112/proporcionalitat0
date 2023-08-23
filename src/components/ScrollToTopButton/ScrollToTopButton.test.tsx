import { render, screen } from "@testing-library/react";
import titles from "../../utils/titles";
import ScrollToTopButton from "./ScrollToTopButton";
import { vi } from "vitest";

describe("Given a ScrollToTopButton component", () => {
  describe("When it is rendered", () => {
    test(`Then it should show an image with the alt text ${titles.arrowUpAltText}`, () => {
      const mockedActionOnClick = vi.fn();
      const expectedAlText = titles.arrowUpAltText;

      render(<ScrollToTopButton actionOnClick={mockedActionOnClick} />);

      const arrowUpImage = screen.getByAltText(expectedAlText);

      expect(arrowUpImage).toBeInTheDocument();
    });
  });
});
