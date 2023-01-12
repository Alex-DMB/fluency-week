import React from 'react'
import styles from './Button.module.sass'



const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
        {props.placeholder}
    </button>
  )
}

export default Button