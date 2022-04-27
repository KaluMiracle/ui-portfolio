/* eslint-disable @next/next/no-img-element */
import styles from './nav.module.scss'
import Image from 'next/image'
import Link from 'next/link'


const Nav = ({
    active= 1
})=> {
    return(
        <div className={styles.nav}>
            <Link href={'/'}>
                <div className={styles.container_1}>
                    <h2>Back to home</h2>
                    <img src="https://fritani.my.canva.site/uiux-portfolio/videos/435164c1555a336ba7a82f786005d2d6.gif" alt="" />
                </div>
            </Link>
            
            <div className={styles.container_2}>
                <Link href='/works'>
                    <p style={{
                        color: `${active === 1 ? '#008037' : '#000000' }`
                    }}>MINI WORKS</p>
                </Link>
                
                <Link href=''>
                    <p style={{
                        color: `${active === 2 ? '#008037' : '#000000' }`
                    }}>CASESTUDIES</p>
                </Link>
                
            </div>
       
        </div>
    )
}

export default Nav;