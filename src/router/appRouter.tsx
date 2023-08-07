import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths";
import { LazyMyListPage, LazyNotFoundPage, LazySearchPage } from "./lazyPages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${paths.search}`} replace />,
      },
      {
        path: `${paths.search}`,
        element: (
          <Suspense>
            <LazySearchPage />
          </Suspense>
        ),
      },
      {
        path: `${paths.myList}`,
        element: (
          <Suspense>
            <LazyMyListPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense>
            <LazyNotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
