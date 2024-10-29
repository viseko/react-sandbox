import NavLink from "../NavLink";
import styles from "./SiteNav.module.scss";

const SiteNav = ({currentPath}) => {
  console.log(currentPath);

  return (
    <div
      className={styles.siteNav}
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