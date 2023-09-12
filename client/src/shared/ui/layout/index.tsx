import { Outlet } from "react-router";

import { Header } from "../header";
import "./index.css";

export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}
