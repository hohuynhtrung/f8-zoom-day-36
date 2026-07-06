import style from "./Dashboard.module.scss";

export default function Dashboard() {
  const recentActive = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      action: "Register a new account",
      time: "5 minutes ago",
    },
    {
      id: 2,
      user: "Trần Thị B",
      action: "Viewed 12k posts ",
      time: "12 minutes ago",
    },
    {
      id: 3,
      user: "Lê Văn C",
      action: "Updated avatar",
      time: "1 hours ago",
    },
  ];
  return (
    <div className={style["dashboard-container"]}>
      <header className={style["dash-header"]}>
        <h1>Dashboard overview</h1>
        <p>Welcome back to the management system.</p>
      </header>

      <div className={style["stat-gird"]}>
        <div className={style["stat-card"]}>
          <h3>New Users</h3>
          <div className={style["number"]}>1,250</div>
          <div className={style["trend-up"]}>+12% this month</div>
        </div>

        <div className={style["stat-card"]}>
          <h3>Total articles</h3>
          <div className={style["number"]}>1,250</div>
          <div className={style["trend-up"]}>+12% new article</div>
        </div>

        <div className={style["stat-card"]}>
          <h3>Page views</h3>
          <div className={style["number"]}>10,2k</div>
          <div className={style["trend-up"]}>+2% compared to yesterday</div>
        </div>
      </div>

      <div className={style["active-section"]}>
        <div className={style["active-list"]}>
          {recentActive.map((active) => (
            <div className={style["active-item"]} key={active.id}>
              <div className={style["info"]}>
                <strong>{active.user}</strong> {active.action}
              </div>
              <div className={style["time"]}>{active.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
