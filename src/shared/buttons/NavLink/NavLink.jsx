import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";

const NavLink = ({
  href,
  text,
  currentPath
}) => {
  const isActive = (currentPath === href);
  const className = [styles.navLink, isActive && styles._active].filter(Boolean).join(" ");

  return isActive ? (
    <div
      className={className}
    >
      {text}
    </div>
  ) : (
    <Link
      to={href}
      className={className}
    >
      {text}
    </Link>
  )
};

export default NavLink;