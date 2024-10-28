import React from 'react'
import styles from "./MainSlide.module.css"

const MainSlide = ({children}) => {

  return (
    <div className={styles.MainSlide}>
      {children}
    </div>
  )
}

export default MainSlide