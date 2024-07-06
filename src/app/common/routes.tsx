import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomeComponent = lazy(() => import("../pages/home"));
const SearchPage = lazy(() => import("../pages/search"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    "path": "/search",
    "element": <SearchPage />
  }
]);

export default router;
