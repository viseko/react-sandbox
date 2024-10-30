import classNames from "classnames";
import styles from "./SiteLogo.module.scss";
import { Link, useMatch } from "react-router-dom";

const SiteLogo = () => {
  const isActive = useMatch("/");
  const className = classNames(styles.siteLogo);

  return isActive ? (
    <div
      className={className}
    >
      <div className={styles.siteLogo__image}></div>
      <div className={styles.siteLogo__text}>SomeLogo</div>
    </div>
  ) : (
    <Link
      className={styles.siteLogo}
      to="/"
    >
      <div className={styles.siteLogo__image}></div>
      <div className={styles.siteLogo__text}>SomeLogo</div>
    </Link>
  );
};

export default SiteLogo;