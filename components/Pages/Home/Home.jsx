import React from 'react'
import styles from './Home.module.sass'
import Form from '../../Form/Form'
import Image from 'next/image'
import Teacher from '/public/images/teacher.png'
import bg1 from '/public/images/bg1c.png'
import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Home = () => {
  return (
    <>
    <div className={styles.background}>
        <Image
        src={bg1}
        fill
        quality={75}
        alt='Background'
        placeholder="blur"
        />
    </div>


    <div className={styles.home}>
        
        <div className={styles.disclaimer}>
            <h1><span>Domine</span> o Inglês em até <span>24 semanas</span> com o <span>novo método</span> desenvolvido por especialistas</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi, quidem, pariatur temporibus fuga optio cum</p>
            
            <Element name="form" className="element">
                <Form/>
            </Element>

        </div>

        <div className={styles.teacher}>
            <Image alt={'Imagem da Professora'} quality={75} src={Teacher} width={'424'}/>
        </div>


    </div>
    </>

  )
}

export default Home