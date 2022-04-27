/* eslint-disable @next/next/no-img-element */
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Image from 'next/image'
import styles from './works.module.scss'
import Head from 'next/head'

const Work = ({
    title= '',
    url = ''
})=>{
    const titles = title.split('of')
    return (
        <div className={styles.work_container}>
            <h3>{titles[0]}</h3>

            {titles[1] ? <h3>{`of ${titles[1]}`}</h3> : <></>}

            <div className={styles.image_container}>
                <img alt='' src={url} loading='lazy' width='100%' height='100%'/>
            </div>
            
        </div>
    )
}

const Works = () => {

    
    return (
        <div className={styles.index}>

            <Head>
                <title>uiux Portfolio Website/works</title>
            </Head>

            <Nav/>

            <Work 
                title='Hero section of a furniture site'
                url='https://fritani.my.canva.site/uiux-portfolio-website-works/images/5471aa1ce58670579c2c43a99ef7f29e.jpg'
            />

            <Work 
                title='Onboarding screens of a library app'
                url='https://fritani.my.canva.site/uiux-portfolio-website-works/images/1b3872e24df481b087c8be455bd7b839.jpg'
            />

            <Work 
                title='Destop and mobile view of a site'
                url='https://fritani.my.canva.site/uiux-portfolio-website-works/images/fdeeff0152593d8f27436881dd5e736c.jpg'
            />

            <div className={styles.fancy_header}>
                Prototypes
                <div className={styles.line}></div>
            </div>

            <div className={styles.video_container}>
                <video controls="true" autoPlay="" name="media" width={'100%'} height= '100%'>
                    <source src="https://fritani.my.canva.site/uiux-portfolio-website-works/videos/611b08a951cab020e72ecc8ae86f89c2.mp4#t=0.01" type="video/mp4"/>

                </video>
            </div>

            <div className={`${styles.video_container} ${styles.large}` } >
                <video controls="true" autoPlay="" name="media" width={'100%'} height= '100%'>
                    <source src="https://fritani.my.canva.site/uiux-portfolio-website-works/videos/4b0011f8f23ce03562d3a2c1909183a7.mp4#t=0.01" type="video/mp4"/>

                </video>
            </div>

            <div className={styles.video_container}>
                <video controls="true" autoPlay="" name="media" width={'100%'} height= '100%' >
                    <source src="https://fritani.my.canva.site/uiux-portfolio-website-works/videos/1d6c651ad37a44c4a6e1ae4f23dc0bc7.mp4#t=0.01" type="video/mp4"/>

                </video>
            </div>

            

            
            <Footer/>
        </div>
    )
}

export default Works