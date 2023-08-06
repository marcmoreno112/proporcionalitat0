import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../utils/testUtils";
import titles from "../utils/titles";
import { routes } from "./appRouter";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given an appRouter router", () => {
  describe("When the user clicks the mylist link", () => {
    test("Then it should show the mylist page title", async () => {
      const expectedMylistPageTitle = titles.myList;
      const expectedMylistLinkText = "My list";

      const testRouterProvider = (): React.ReactElement => {
        const mockRouter = createMemoryRouter(routes);

        return <RouterProvider router={mockRouter} />;
      };

      renderWithProviders(testRouterProvider());

      const mylistLink = screen.getByRole("link", {
        name: expectedMylistLinkText,
      });

      await userEvent.click(mylistLink);

      const mylistTitle = screen.getByRole("heading", {
        name: expectedMylistPageTitle,
      });

      expect(mylistTitle).toBeInTheDocument();
    });
  });
});
