import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Button from "./Button";
import { mockTitleText } from "../../mocks/filmsMocks";

describe("Given a Button component", () => {
  describe(`When it receives an actionOnClick and a ${mockTitleText} text`, () => {
    test("Then it should show a button with the text", () => {
      const actionOnClick = vi.fn();
      const className = "";
      const text = mockTitleText;

      render(
        <Button
          className={className}
          actionOnClick={actionOnClick}
          text={text}
        />
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });
});
