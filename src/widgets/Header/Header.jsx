import SiteNav from "../../shared/buttons/SiteNav";
import ThemeSwitcher from "../../shared/buttons/ThemeSwitcher/ThemeSwitcher";
import SiteLogo from "../../shared/small-parts/SiteLogo";
import styles from "./Header.module.scss";

const Header = ({
  classNames = []
}) => {

  return (
    <div
      className={[styles.header, ...classNames].filter(Boolean).join(" ")}
    >
      <div className={"container " + styles.container}>
        <SiteLogo />
        <SiteNav
          className={styles.nav}
        />
        <div className={styles.controls}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Header;