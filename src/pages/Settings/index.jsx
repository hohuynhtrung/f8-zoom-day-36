import { useState } from "react";
import style from "./Settings.module.scss";

export default function Settings() {
  const [notify, setNotify] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    alert("Đã lưu các thay đổi cài đặt!");
  };

  return (
    <div className={style["settings-container"]}>
      <header className={style["settings-header"]}>
        <h2>System setting</h2>
        <p>Manage your account configuration and application customizations.</p>
      </header>

      <form onSubmit={handleSave} className={style["settings-form"]}>
        <div className={style["settings-section"]}>
          <h3>Personal infomation</h3>
          <div className={style["form-group"]}>
            <label>Name</label>
            <input
              type="text"
              defaultValue="Admin F8"
              placeholder="Enter your name"
            />
          </div>
          <div className={style["form-group"]}>
            <label>Email</label>
            <input
              type="email"
              defaultValue="admin@f8.edu.vn"
              placeholder="Enter email"
            />
          </div>
        </div>

        <div className={style["settings-section"]}>
          <h3>Application options</h3>

          <div className={style["toggle-group"]}>
            <div className={style["toggle-info"]}>
              <strong>Email notification </strong>
              <p>Receive updates on system activity.</p>
            </div>
            <label className={style["switch"]}>
              <input
                type="checkbox"
                checked={notify}
                onChange={() => setNotify(!notify)}
              />
              <span className={style["slider"]}></span>
            </label>
          </div>

          <div className={style["toggle-group"]}>
            <div className={style["toggle-info"]}>
              <strong>Dark mode</strong>
              <p>Switch the interface to dark mode to protect your eyes.</p>
            </div>
            <label className={style["switch"]}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className={style["slider"]}></span>
            </label>
          </div>
        </div>

        <div className={style["form-actions"]}>
          <button type="submit" className={style["save-btn"]}>
            Save change
          </button>
        </div>
      </form>
    </div>
  );
}
