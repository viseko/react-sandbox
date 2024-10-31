import classNames from "classnames";
import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = ({className}) => {
  const classes = classNames(styles.siteNav, className);

  return (
    <div
      className={classes}
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