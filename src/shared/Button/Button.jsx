import React from 'react'
import styles from "./Button.module.scss";

const Button = ({
  onClick,
  onContextMenu,
  text,
  disabled
}) => {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      onContextMenu={onContextMenu}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button