import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.scss";

function Header() {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/posts", label: "Posts" },
    { path: "/login", label: "Auth" },
    { path: "/admin", label: "Dashboard" },
  ];

  const location = useLocation();
  const checkAuthActive = (itemPath) => {
    const currentPath = location.pathname;
    if (itemPath === "/login") {
      const authPaths = ["/login", "/register", "/forgot-password"];
      return authPaths.includes(location.pathname);
    }
    return currentPath === itemPath;
  };

  return (
    <header className={style["main-header"]}>
      <div className={style["header-container"]}>
        <NavLink to={"/"} className={style.logo}>
          F8-zoom-day-36
        </NavLink>
        <nav className={style.nav}>
          <ul>
            {menuItems.map((item) => {
              const isCurrentActive = checkAuthActive(item.path);
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={
                      isCurrentActive
                        ? `${style["nav-link"]} ${style.active}`
                        : style["nav-link"]
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
