import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={style["footer-container"]}>
      <div className={style["footer-content"]}>
        <div className={style["footer-info"]}>
          <span>© 2026 F8-zoom-day-36. All rights reserved. </span>
        </div>
        <div className={style["footer-link"]}>
          <Link to="/contact" className={style["link-item"]}>
            Contact
          </Link>
          <Link to="/privacy" className={style["link-item"]}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
