import styles from "./NavLink.module.scss";
import { Link, useMatch } from "react-router-dom";
import classNames from "classnames";

const NavLink = ({
  href,
  text,
}) => {
  const isActive = useMatch(href);
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