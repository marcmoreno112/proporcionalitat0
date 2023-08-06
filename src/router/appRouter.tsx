import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths";
import SearchPage from "../pages/SearchPage/SearchPage";
import MyListPage from "../pages/MyListPage/MyListPage";

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
      {
        path: `${paths.myList}`,
        element: <MyListPage />,
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
