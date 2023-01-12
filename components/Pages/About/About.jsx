import Image from 'next/image'
import React, { useContext } from 'react'
import styles from './About.module.sass'
import Teacher from '/public/images/teacher.png'
import IconTeacher from '/public/images/icon-teacher.png'
import Button from '../../Form/Button/Button'
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { InputContext } from '../../../context/InputContext'
import bg2 from '/public/images/bg2c.png'
const About = () => {

    const {scrollToFocus,setScrollToFocus} = useContext(InputContext)

    return (
    <>
    <div className={styles.about}>
        <div className={styles.background}>
            <Image
            src={bg2}
            fill
            quality={75}
            alt='Background'
            placeholder="blur"

            />
        </div>

        <div>
            <div>
                
                <div className={styles.teacher}>
                    <Image quality={75} src={Teacher} alt='Imagem da Professora'/>
                </div>

                <div className={styles.info}>

                    <Image quality={75} src={IconTeacher} width='64' alt='Icone de professora'/>
                    <span>QUEM SERÁ SUA PROFESSORA?</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Pellentesque turpis consequat diam ullamcorper sed tortor pretium viverra integer. Ipsum duis accumsan risus ornare lobortis malesuada vestibulum auctor vulputate. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Pellentesque turpis consequat diam ullamcorper sed tortor pretium viverra integer. Ipsum duis accumsan risus ornare lobortis malesuada vestibulum auctor vulputate. 
                    </p>
                    
                </div>

            </div>
            <div className={styles.cta}>
                <p>Eai, pronto pra entrar nessa?</p>
                <Link activeClass="active" to="form" spy={true} smooth={true} offset={-1000} duration={500}>
                    <Button onClick={()=>setScrollToFocus(!scrollToFocus)} placeholder='QUERO PARTICIPAR!'/>
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default About