import React from "react";
import { RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";

import { browserRouter } from "./shared/config";
import { PageSpin } from "./shared/ui/pageSpin";
import "./index.css";
import "./shared/config/initialize";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} fallbackElement={<PageSpin />} />
  </React.StrictMode>,
);
