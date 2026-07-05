import { Link } from "react-router-dom";
import style from "./Login.module.scss";

export default function Login() {
  return (
    <div className={style["login-container"]}>
      <form className={style["auth-form"]} onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <Link to="/forgot-password" className={style["link-flat"]}>
          Forgot password?
        </Link>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
