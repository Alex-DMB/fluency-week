import React from 'react'
import Logo from '../../Logo/Logo'
import styles from './Header.module.sass'


const Header = () => {
  return (
    <div className={styles.header}>
        <Logo/>
    </div>
  )
}

export default Header