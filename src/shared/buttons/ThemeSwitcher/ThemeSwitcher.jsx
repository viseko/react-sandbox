
import { useContext } from "react";
import Icon from "../../small-parts/Icon/Icon";
import styles from "./ThemeSwitcher.module.scss";
import classNames from "classnames";
import { ThemeContext } from "../../../app/providers/ThemeProvider";

const ThemeSwitcher = () => {

  const {theme, setTheme} = useContext(ThemeContext);
  const className = classNames(styles.themeSwitcher, styles[theme]);

  const switchTheme  = () => {
    const themeName = (theme === "light") ? "dark" : "light";
    setTheme(themeName);
  };

  return (
    <button
      className={className}
      title="Сменить тему"
      onClick={switchTheme}
    >
      <Icon name="sun" width="24" height="24" className={styles.sun} />
      <Icon name="moon" width="24" height="24" className={styles.moon} />
    </button>
  );
};

export default ThemeSwitcher;