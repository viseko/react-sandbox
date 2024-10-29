import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = () => {
  return (
    <div
      className={styles.siteNav}
    >
      <NavLink
        href="/about"
        text="О компании"
      />
      <NavLink
        href="/catalog"
        text="Каталог"
      />
      <NavLink
        href="/contacts"
        text="Контакты"
      />
    </div>
  );
};

export default SiteNav;