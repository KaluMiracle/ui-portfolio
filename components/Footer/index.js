/* eslint-disable @next/next/no-img-element */
import styles from './footer.module.scss'
import Image from 'next/image'
import { useState } from 'react'
const Footer = ()=> {
    const [className, setClassname] = useState()
    return(
        <div className={styles.footer } data-aos="fade-up">
            <h1>Work with Me</h1>
            <p>send an email</p>
            <a>egwimheritage@gmail.com</a>
            <img alt='kd' className={styles.rocket}
                src={'https://fritani.my.canva.site/uiux-portfolio/videos/a61456f09989112a8c16ba26a902dde0.gif'}
            />
            <div></div>
            <div className={styles.links_container}>
                <img alt='linkedin' 
                    src={'https://fritani.my.canva.site/uiux-portfolio/images/96f31c7cb0d12c3108602de6f2c5d363.svg'}
                />
                <img alt='ig'
                    src={'https://fritani.my.canva.site/uiux-portfolio/images/82ca36770005b7351e28866a8e56be82.svg'}
                />
                <img alt='linkedin'
                    src={'https://fritani.my.canva.site/uiux-portfolio/images/7d58a9bf5a1dde59658410cc1f74e95e.svg'}
                />
            </div>
            <div className={styles.black_container}>
                <p>Terms & Support</p>
                <div>Designed with <span>Canva</span></div>
            </div>
        </div>
    )
}

export default Footer;