import styles from "./SiteLogo.module.scss";

const SiteLogo = () => {
  return (
    <a
      className={styles.siteLogo}
      href="/"
    >
      <div className={styles.siteLogo__image}></div>
      <div className={styles.siteLogo__text}>SomeLogo</div>
    </a>
  );
};

export default SiteLogo;