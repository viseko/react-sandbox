import styles from "./NavLink.module.scss";

const NavLink = ({
  href,
  text
}) => {
  return (
    <a
      href={href}
      className={styles.navLink}
    >
      {text}
    </a>
  );
};

export default NavLink;