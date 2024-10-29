import styles from "./NavLink.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavLink = ({
  href,
  text,
  currentPath
}) => {
  const isActive = (currentPath === href);
  const className = classNames(
    styles.navLink,
    {
      [styles._active]: isActive,
    }
  );

  if (isActive) {
    return (<div className={className}>{text}</div>)
  }

  return (
    <Link to={href} className={className}>{text}</Link>
  )
};

export default NavLink;