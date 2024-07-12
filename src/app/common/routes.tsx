import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomeComponent = lazy(() => import("../pages/home"));
const SearchPage = lazy(() => import("../pages/search"));
const RestaurantPage = lazy(() => import("../pages/restaurant"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent />,
  },
  {
    "path": "/search",
    "element": <SearchPage />
  },
  {
    "path": "/restaurant/:id",
    "element": <RestaurantPage />
  }
]);

export default router;
