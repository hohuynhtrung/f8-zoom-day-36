import { Link } from "react-router-dom";
import style from "./ForgotPassword.module.scss";

export default function ForgotPassword() {
  return (
    <div className={style["forgot-password-container"]}>
      <form className={style["auth-form"]} onSubmit={(e) => e.preventDefault()}>
        <h2>Forgot password</h2>
        <p className={style["desc"]}>
          Enter your email address below and we will send you code to reset your
          password.
        </p>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Send request</button>
        <div className={style["back-link"]}>
          <Link to="/login">← Back to Login</Link>
        </div>
      </form>
    </div>
  );
}
