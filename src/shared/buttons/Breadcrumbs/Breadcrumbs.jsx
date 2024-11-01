import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import classNames from "classnames";
import paths from "../../../app/router/paths";

const Breadcrumbs = ({currentTitle}) => {
  const className = classNames(styles.breadcrumbs, "reset-list");
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean).slice(0, -1);

  const findTitleByPath = (path) => {
    const route = paths.find(route => route.path === `/${path}`);
    return route ? route.title : path;
  }

  const crumbs = pathnames.map((pathname, index) => {
    const href = `/${pathnames.join("/")}`
    const title = findTitleByPath(pathname)
    return (
      <li key={index}>
        <Link
          to={href}
        >{title}</Link>
      </li>
    )
  });

  

  return (
    <ul
      className={className}
    >
      <li>
        <Link to="/">Главная</Link>
      </li>
      {crumbs}
      <li>
        {currentTitle}
      </li>
    </ul>
  );
};

export default Breadcrumbs;