import { Link } from "react-router-dom";
import style from "./Register.module.scss";

export default function Register() {
  return (
    <div className={style["register-container"]}>
      <form className={style["auth-form"]} onSubmit={(e) => e.preventDefault()}>
        <h2>Register</h2>
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
