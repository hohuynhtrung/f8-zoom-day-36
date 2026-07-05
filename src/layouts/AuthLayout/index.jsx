import { Outlet } from "react-router-dom";
import style from "./AuthLayout.module.scss";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

export default function AuthLayout() {
  return (
    <div className={style["wrapper"]}>
      <Header />
      <main className={style["main"]}>
        <AuthSidebar />
        <Outlet />
      </main>
    </div>
  );
}
