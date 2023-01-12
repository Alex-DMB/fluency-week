import React, { useRef } from 'react'
import styles from './Form.module.sass'
import Button from '../Form/Button/Button'
import InputName from './Inputs/Name/InputName'
import InputEmail from './Inputs/Email/InputEmail'



const Form = () => {


    return (
    <form className={styles.form}>
        <h3>PARTICIPE GRATUITAMENTE</h3>
        <div>
                <InputName/>
                <InputEmail/>
            
            <p>Seu e-mail está seguro, você receberá apenas comunicados sobre o evento</p>
            <Button placeholder='QUERO PARTICIPAR!'/>
        </div>
    </form>
  )
}

export default Form