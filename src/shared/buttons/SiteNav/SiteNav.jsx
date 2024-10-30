import classNames from "classnames";
import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = () => {
  const className = classNames(styles.siteNav);

  return (
    <div
      className={className}
    >
      <NavLink
        href="/catalog"
        text="Каталог"
      />
      <NavLink
        href="/about"
        text="О нас"
      />
      <NavLink
        href="/contacts"
        text="Контакты"
      />
    </div>
  );
};

export default SiteNav;