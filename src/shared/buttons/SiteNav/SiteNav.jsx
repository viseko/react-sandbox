import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = () => {
  return (
    <div
      className={styles.siteNav}
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