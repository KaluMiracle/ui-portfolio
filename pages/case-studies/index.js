/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import Link from 'next/link'
import styles from './case-studies.module.scss'
import Head from 'next/head'
import WorksLayout from '../../layouts/worksLayout'
import { caseStudies } from './casestudies'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


const CaseStudy = ({
    title= '',
    description='',
    content='',
    imageUrl
})=>{
    return (
        <div className={styles.case_study_container} data-aos="fade-up">
            <div className={styles.container_1}>
                <h3>{title} -</h3>
                <h3>{description}</h3>
                <p>{content}</p>
                {imageUrl ? 
                    <Link href={'/case-studies/' + title}>
                        <div className={styles.button}>View CaseStudy</div>
                    </Link>
                : <p className={styles.coming_soon}>comming soon</p>
                }
            </div>
            



            {imageUrl ? 
                <div className={styles.image_container}>
                    <img alt='' src={imageUrl} loading='lazy' width='100%' height='100%'/>
                </div>

            :

                <div className={styles.overlay}></div>
        
            }

            
            
        </div>
        
    )
}

const CaseStudies = () => {
    useEffect(()=>{
        AOS.init();
    })
    
    return (

        <WorksLayout active={2}>
            <Head>
                <title>uiux Portfolio Website/case-studies</title>
            </Head>
            <div className={styles.index}>

                {caseStudies.map(casestudy => {
                    return <CaseStudy key={casestudy.title} {...casestudy}/>
                })}

               
            </div>
        
        </WorksLayout>
            
    )
}
// https://fritani.my.canva.site/uiui-portfolio-website/images/00f02d886cce38087a38769c07cade69.svg
// https://fritani.my.canva.site/uiui-portfolio-website/images/c1cc674b5ca96cc3687ff466f61a1906.png


export default CaseStudies;