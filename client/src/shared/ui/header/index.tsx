import { NavLink } from "react-router-dom";

import { appRoutes } from "../../config";
import "./index.css";

export function Header() {
  return (
    <div className="header">
      <NavLink to={appRoutes.getMainUrl()} className="header-link">
        Главная
      </NavLink>
      <NavLink to={appRoutes.getCreateMoviePageUrl()} className="header-link">
        Добавить фильм
      </NavLink>
    </div>
  );
}
