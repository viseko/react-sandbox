import classNames from "classnames";
import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = ({currentPath}) => {
  const className = classNames(styles.siteNav);

  return (
    <div
      className={className}
    >
      <NavLink
        href="/catalog"
        text="Каталог"
        currentPath={currentPath}
      />
      <NavLink
        href="/about"
        text="О нас"
        currentPath={currentPath}
      />
      <NavLink
        href="/contacts"
        text="Контакты"
        currentPath={currentPath}
      />
    </div>
  );
};

export default SiteNav;