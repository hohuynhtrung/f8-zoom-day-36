import { useState } from "react";
import style from "./Users.module.scss";

export default function UserManage() {
  const [users] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "anv@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "btt@gmail.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 3,
      name: "Lê Văn C",
      email: "clv@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Phạm Minh D",
      email: "dpm@gmail.com",
      role: "User",
      status: "Active",
    },
  ]);
  return (
    <div className={style["users-container"]}>
      <div className={style["users-header"]}>
        <h2>User management</h2>
        <button className={style["add-btn"]}>Add users</button>
      </div>

      <div className={style["search-bar"]}>
        <input type="text" placeholder="Sreach name or email..." />
      </div>

      <div className={style["table-data"]}>
        <table className={style["table-user"]}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <strong>{user.name}</strong>
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={style["role-badge"]}>{user.role}</span>
                </td>
                <td>
                  <span
                    className={`${style["status-badge"]} ${style[user.status.toLowerCase()]}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className={style["actions"]}>
                    <button className={style["edit-btn"]}>Sửa</button>
                    <button className={style["delete-btn"]}>Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
