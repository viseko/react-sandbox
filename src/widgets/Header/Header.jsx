import SiteNav from "../../shared/buttons/SiteNav";
import SiteLogo from "../../shared/small-parts/SiteLogo";
import styles from "./Header.module.scss";
import {useLocation} from "react-router-dom";

const Header = ({
  classNames = []
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={[styles.header, ...classNames].filter(Boolean).join(" ")}
    >
      <div className={"container " + styles.header__container}>
        <SiteLogo
          currentPath={currentPath}
        />
        <SiteNav
          currentPath={currentPath}
        />
      </div>
    </div>
  );
};

export default Header;