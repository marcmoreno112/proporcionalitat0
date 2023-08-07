import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import titles from "../utils/titles";
import { routes } from "./appRouter";

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

      const mylistLink = await screen.findByRole("link", {
        name: expectedMylistLinkText,
      });

      await userEvent.click(mylistLink);

      const mylistTitle = await screen.findByRole("heading", {
        name: expectedMylistPageTitle,
      });

      expect(mylistTitle).toBeInTheDocument();
    });
  });
});
