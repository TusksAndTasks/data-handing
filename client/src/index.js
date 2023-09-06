import React from "react";
import ReactDOM from "react-dom/client";

import { requestManagerHook } from "./shared/hooks";
import "./index.css";

requestManagerHook();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div></div>
  </React.StrictMode>,
);
