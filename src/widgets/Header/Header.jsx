import styles from "./Header.module.scss";

const Header = ({
  classNames = []
}) => {
  return (
    <div
      className={[styles.header, ...classNames].filter(Boolean)}
    >
      <div className="container">
        Привет
      </div>
    </div>
  );
};

export default Header;