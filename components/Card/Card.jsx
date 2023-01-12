import Image from 'next/image'
import React from 'react'
import styles from './Card.module.sass'
import Play from '../../public/images/play.png'
import Thumb from '../../public/images/thumbc.png'

const Card = (props) => {
  return (

    <>
    
    <div className={styles.card}>
    <div className={styles.background}>
        <Image src={Thumb} alt='Thumbnail' quality={50}/>
    </div>
        <span>{props.date}</span>
        <Image quality={75} src={Play} width='50' alt='Botão de Play'/>
        <span>Aula {props.aula} 🔒</span>
        <span>{props.descrition}</span>
    </div>
    </>

  )
}

export default Card