import { createBrowserRouter } from "react-router-dom";

import { appRoutes } from "./appRoutes";
import { Layout } from "../../ui/layout";

export const browserRouter = createBrowserRouter([
  {
    path: "*",
    element: "error",
  },
  {
    path: appRoutes.getMainUrl(),
    element: <Layout />,
    children: [
      { index: true, lazy: () => import("../../../ui/moviesPage") },
      {
        path: appRoutes.getDetailedMoviePageUrl(),
        lazy: () => import("../../../ui/detailedMoviePage"),
      },
      {
        path: appRoutes.getCreateMoviePageUrl(),
        lazy: () => import("../../../ui/createMoviePage"),
      },
    ],
  },
]);
