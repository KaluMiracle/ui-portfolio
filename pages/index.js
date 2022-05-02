/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.index}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container_1}>
        <div className={styles.head}>
          <h2>Design Portfolio</h2>
          <div></div>
        </div>
        <div className={styles.nav}>
          <Link href={'/#about'}>
            <p>about</p>
          </Link>
          <Link href={'/works'}>
            <p>Works</p>
          </Link>
          <Link href={''}>
            <p>Contact</p>
          </Link>
        </div>
        <h1>Hi, I'm <span>Heritage Egwim</span>,</h1>
        <h2>and I'm a UI/UX Designer.</h2>
        <div className={styles.case_studies}>
          <img src='https://fritani.my.canva.site/uiux-portfolio/videos/435164c1555a336ba7a82f786005d2d6.gif' alt='hd'/>
          <Link href={'/case-studies'}>
            <p>View CASESTUDIES</p>
          </Link>
        </div>
      </div>
      
      <div id='about' className={styles.container_2}>
        <div className={styles.about}>
          <h2>About Me</h2>
          <p>Hi! I'm Heritage.</p>
          <p>I am passionate about anything design. I make user-friendly designs that can be implemented and are sustainable.</p>
          <p>Over the period of my learning and constant work practice, 
            I developed an interest in how people respond positively to interactive interfaces that give digital solutions to their challenges. Having this knowledge, 
            I create designs that solve real world challenges.
          </p>
          <p>I am open to learning more in this design field in order to deliver better products.</p>
        </div>
        <div className={styles.image}></div>
      </div>

      <div className={styles.container_3}>
        <div className={styles.head}>
          <h2>Credentials</h2>
          <div></div>
        </div>
        <div className={styles.box}>
          <h4>Education</h4>
          <div>
            <p>ZEROTOMASTERY ACADEMY</p>
            <p>UIUX certification in progress</p>
            <p>(August 2021-Current date)</p>
          </div>
        </div>

        <div className={styles.box}>
          <h4>Skills</h4>
          <div>
            <p>User-Centered Design</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Creative writing</p>
          </div>
        </div>

       
      </div>
      
      
      <Footer/>
    </div>
  )
}
