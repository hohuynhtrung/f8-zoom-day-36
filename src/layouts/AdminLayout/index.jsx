import { Outlet } from "react-router-dom";
import style from "./AdminLayout.module.scss";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";

export default function AdminLayout() {
  return (
    <div className={style["wrapper"]}>
      <AdminSidebar />
      <main className={style["main"]}>
        <Outlet />
      </main>
      <AdminFooter />
    </div>
  );
}
