import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={style["not-found-container"]}>
      <h1>404</h1>
      <h2>Not Found</h2>
      <p>The URL you accessed does not found.</p>
      <Link to="/" className={style["back-home-btn"]}>
        Back to home
      </Link>
    </div>
  );
}
