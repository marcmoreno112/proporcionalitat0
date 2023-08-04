import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
