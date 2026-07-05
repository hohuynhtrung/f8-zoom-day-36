import { NavLink } from "react-router-dom";
import style from "./AuthSidebar.module.scss";

export default function AuthSidebar() {
  const menuItems = [
    { path: "/login", label: "Login" },
    { path: "/register", label: "Register" },
    { path: "/forgot-password", label: "Forgot password" },
  ];
  return (
    <div className={style["auth-sidebar"]}>
      <div className={style["menu"]}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${style["nav-link"]} ${style.active}`
                : style["nav-link"]
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
