import React from 'react'
import Card from '../../Card/Card'
import styles from './Content.module.sass'
const Content = () => {
  return (
    <div className={styles.content}>
        <div>
            <h2>O QUE VOCÊ IRÁ APRENDER</h2>
            
            <p>Lorem ipsum dolor sit amet consectetur. Tincidunt nullam et pulvinar ut elementum gravida ut. Egestas vel eu sociis consequat quis tortor facilisis gravida. Ac mattis donec consectetur sit eget at laoreet.</p>

            <div className={styles.cards}>
                <Card date='01/01 - 20h' aula='01' descrition='Descrição 01'/>
                <Card date='03/01 - 20h' aula='02' descrition='Descrição 02'/>
                <Card date='05/01 - 20h' aula='03' descrition='Descrição 03'/>
                <Card date='07/01 - 20h' aula='04' descrition='Descrição 04'/>
            </div>

            <p>Lorem ipsum dolor sit amet consectetur. Tincidunt nullam et pulvinar ut elementum gravida ut. Egestas vel eu sociis consequat quis tortor facilisis gravida. Ac mattis donec consectetur sit eget at laoreet.</p>

            <p>Lorem ipsum dolor sit amet consectetur. Tincidunt nullam et pulvinar ut elementum gravida ut. Egestas vel eu sociis consequat quis tortor facilisis gravida. Ac mattis donec consectetur sit eget at laoreet.</p>
        </div>

    </div>
  )
}

export default Content