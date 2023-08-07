import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { filmMock } from "../../mocks/filmsMocks";
import { routes } from "../../router/appRouter";
import { renderWithProviders } from "../../utils/testUtils";

describe("Given an App component", () => {
  describe("When the user rates a ", () => {
    test("Then it should show the mylist page title", async () => {
      const testRouterProvider = (): React.ReactElement => {
        const mockRouter = createMemoryRouter(routes);

        return <RouterProvider router={mockRouter} />;
      };

      renderWithProviders(testRouterProvider(), {
        filmsState: { detailFilm: filmMock, filmsRated: [], titleText: "" },
      });

      const rating = await screen.findByRole("combobox");
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
