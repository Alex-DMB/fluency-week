import React from 'react'
import styles from './Logo.module.sass'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <h2>Semana da <span>Fluência</span></h2>
        <div class={styles.bgfluencia}></div>
    </div>
  )
}

export default Logo