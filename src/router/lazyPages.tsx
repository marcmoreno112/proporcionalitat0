import { lazy } from "react";

export const LazyNotFoundPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyMyListPage = lazy(
  () => import("../pages/MyListPage/MyListPage")
);

export const LazySearchPage = lazy(
  () => import("../pages/SearchPage/SearchPage")
);
