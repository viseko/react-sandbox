import styles from "./SiteLogo.module.scss";
import { Link } from "react-router-dom";

const SiteLogo = ({
  currentPath
}) => {
  const isActive = (currentPath === "/");

  return isActive ? (
    <div
      className={styles.siteLogo}
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