import React, { useContext, useEffect, useRef } from 'react'
import styles from '../Input.module.sass'
import { InputContext } from '../../../../context/InputContext';

const InputName = () => {

    const {scrollToFocus} = useContext(InputContext)
    const nameInput = useRef()

    useEffect(()=>{
        nameInput.current.focus()
    },[scrollToFocus])

    return (

        
    <input ref={nameInput} className={styles.input} type='name' placeholder='Seu nome' id='name' autoFocus/>

  )
}

export default InputName