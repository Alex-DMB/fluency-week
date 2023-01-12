import React from 'react'
import styles from '../Input.module.sass'




const InputEmail = () => {
    return (
        <input className={styles.input} type='email' placeholder='Seu e-mail' id='email'/>

  )
}

export default InputEmail