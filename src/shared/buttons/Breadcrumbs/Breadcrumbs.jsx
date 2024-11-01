import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import classNames from "classnames";

const Breadcrumbs = () => {
  const className = classNames(styles.breadcrumbs, "reset-list");
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const crumbs = pathnames.map((pathname, index) => {
    if (index === pathnames.length - 1) {
      return <li>{pathname}</li>
    } else {
      const href = `/${pathnames.slice(0, index - 1).join("/")}`
      return (
        <li>
          <Link
            to={href}
          >{pathname}</Link>
        </li>
      )
    }
  });

  return (
    <ul
      className={className}
    >
      <li>
        <Link to="/">Главная</Link>
      </li>
      {crumbs}
    </ul>
  );
};

export default Breadcrumbs;