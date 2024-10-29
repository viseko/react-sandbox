import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

const NavLink = ({
  href,
  text
}) => {
  return (
    <Link
      to={href}
      className={styles.navLink}
    >
      {text}
    </Link>
  );
};

export default NavLink;