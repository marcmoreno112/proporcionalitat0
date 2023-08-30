import { screen } from "@testing-library/react";
import titles from "../../utils/titles";
import ScrollToTopButton from "./ScrollToTopButton";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given a ScrollToTopButton component", () => {
  describe("When it is rendered", () => {
    test(`Then it should show an image with the alt text ${titles.arrowUpAltText}`, () => {
      const mockedActionOnClick = vi.fn();
      const expectedAlText = titles.arrowUpAltText;

      renderWithProviders(
        <ScrollToTopButton actionOnClick={mockedActionOnClick} />
      );

      const arrowUpImage = screen.getByAltText(expectedAlText);

      expect(arrowUpImage).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the user clicks the button", () => {
    test("Then the function of the button should be called", async () => {
      const mockedActionOnClick = vi.fn();
      const expectedAlText = titles.arrowUpAltText;

      renderWithProviders(
        <ScrollToTopButton actionOnClick={mockedActionOnClick} />
      );

      const scrollToTopButton = screen.getByRole("button", {
        name: expectedAlText,
      });

      await userEvent.click(scrollToTopButton);

      expect(mockedActionOnClick).toHaveBeenCalled();
    });
  });
});
