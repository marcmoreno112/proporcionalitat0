import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths";
import SearchPage from "../pages/SearchPage/SearchPage";

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
        element: <SearchPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
