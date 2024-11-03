import Icon from "../../small-parts/Icon/Icon";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  className,
  text,
  size,
  theme,
  icon,
  iconLeft,
  onClick,
}) => {
  const classes = classNames(
    styles.button,
    className,
    {
     [ styles[`theme_${theme}`]]: Boolean(theme),
     [ styles[`size_${size}`]]: Boolean(size),
    }
  );

  // * Определяем содержимое кнопки
  let buttonContent = [text];
  if (icon) {
    const method = iconLeft ? "unshift" : "push";
    buttonContent[method](<Icon name={icon} width="24" height="24" />)
  }

  // * Группируем пропсы для корневого элемента
  const props = {
    className: classes,
    onClick,
  }

  // * В зависимости от наличия атрибута href возвращаем кнопку или ссылку
  return (
    <button {...props}>{buttonContent}</button>
  );
};

export default Button;