import Icon from "../../small-parts/Icon/Icon";
import styles from "./ButtonIcon.module.scss";
import classNames from "classnames";

const ButtonIcon = ({
  className,
  icon,
  onClick
}) => {
  const classes = classNames(styles.buttonIcon, className)

  return (
    <button
      className={classes}
      onClick={onClick}
    >
      <Icon
        name={icon}
        widht="24"
        height="24"
      />
    </button>
  );
};

export default ButtonIcon;