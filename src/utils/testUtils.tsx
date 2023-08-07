import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { PreloadedState } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { RootState, setupStore, store } from "../store";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <Provider store={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Provider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const providerWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => (
  <Provider store={store}>{children}</Provider>
);

export const mockRouterProvider = (
  ui: React.ReactElement
): React.ReactElement => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: ui,
    },
  ];

  const mockRouter = createMemoryRouter(routes);

  return <RouterProvider router={mockRouter} />;
};
