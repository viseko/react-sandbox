import SiteNav from "../../shared/buttons/SiteNav";
import SiteLogo from "../../shared/small-parts/SiteLogo";
import styles from "./Header.module.scss";

const Header = ({
  classNames = []
}) => {

  return (
    <div
      className={[styles.header, ...classNames].filter(Boolean).join(" ")}
    >
      <div className={"container " + styles.header__container}>
        <SiteLogo />
        <SiteNav />
      </div>
    </div>
  );
};

export default Header;