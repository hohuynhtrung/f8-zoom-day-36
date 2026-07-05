import { NavLink } from "react-router-dom";
import style from "./AdminSidebar.module.scss";

export default function AdminSidebar() {
  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/user-manage", label: "User Manage" },
    { path: "/settings", label: "Settings" },
  ];
  return (
    <header className={style["admin-sidebar"]}>
      <div className={style["header-container"]}>
        <NavLink to={"/"} className={style.logo}>
          F8-zoom-day-36
        </NavLink>
        <nav className={style.nav}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${style["nav-link"]} ${style.active}`
                      : style["nav-link"]
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
