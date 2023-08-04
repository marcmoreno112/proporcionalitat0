import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths";

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
        element: <App />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
