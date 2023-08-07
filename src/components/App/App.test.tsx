import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockTitleText } from "../../mocks/filmsMocks";
import titles from "../../utils/titles";
import { routes } from "../../router/appRouter";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When the user rates a ", () => {
    test("Then it should show the mylist page title", async () => {
      const testRouterProvider = (): React.ReactElement => {
        const mockRouter = createMemoryRouter(routes);

        return <RouterProvider router={mockRouter} />;
      };

      renderWithProviders(testRouterProvider());

      const inputText = mockTitleText;
      const expectedPlaceholder = titles.searchInputPlaceholder;

      const input = screen.getByPlaceholderText(expectedPlaceholder);
      await userEvent.type(input, inputText);

      const detailButton = await screen.getAllByTestId("detail-button");
      await userEvent.click(detailButton[0]);

      const rating = screen.getByRole("combobox");
      await userEvent.selectOptions(rating, "1");

      const expectedCommentLabel = "Comment";
      const commentInput = screen.getByRole("textbox", {
        name: expectedCommentLabel,
      });
      const typedComment = "any text";
      await userEvent.type(commentInput, typedComment);

      const expectedSaveButtonText = "Save";
      const saveButton = screen.getByRole("button", {
        name: expectedSaveButtonText,
      });
      await userEvent.click(saveButton);

      const expectedMylistLinkText = "My list";
      const mylistLink = screen.getByRole("link", {
        name: expectedMylistLinkText,
      });
      await userEvent.click(mylistLink);

      const comment = screen.getByText(typedComment);

      expect(comment).toBeInTheDocument();
    });
  });
});
