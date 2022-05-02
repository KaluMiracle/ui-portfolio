/* eslint-disable @next/next/no-img-element */
import { caseStudies } from "./casestudies"
import styles from './slug.module.scss'
import Link from 'next/link'
import reactDom from "react-dom"
import { withRouter } from "next/router"
export const getStaticPaths = ()=> {
    const paths = caseStudies.map((caseStudy, index) => {
        return {

            params: {caseStudy: caseStudy.title, locale: index.toString()}
        }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = (context)=>{
    const index = context.params.index
    // console.log('ddd')
    console.log(context)
    return {
        props: { caseStudy: caseStudies[0]  }
    }
}

const FancyHeaderYellow = ({title=''})=>{

    return(
        <div className={styles.fancy_header_yellow}>
            <h4>{title}</h4>
            <div className={styles.line_container}>
                <div className={styles.line}></div>
                <div className={styles.box}></div>
            </div>
            
        </div>
    )
}

const Result = ({
    index =1,
    content=''
}) => {
    return(
        <div className={styles.result}>
            <h1 style={{
                left: `${(index + 1)% 2 === 1 ? 0 : ''}`,
                right: `${(index + 1)% 2 === 0 ? 0 : ''}`
            }}>0{index + 1} </h1>
            <p style={{
                marginRight: `${(index + 1)% 2 === 1 ? '10%' : ''}`,
                marginLeft: `${(index + 1)% 2 === 0 ? '10%' : ''}`
            }}>{content}</p>
        </div>
    )
}

const colors = [
    {
        background: 'red',
        color: 'white',
    },
    {
        background: 'yellow',
        color: 'black',
    },
    {
        background: 'aquamarine',
        color: 'black',
    },
    {
        background: 'blue',
        color: 'white',
    },
    
]
const CaseStudy = ({caseStudy}) =>{
    return (
         <div className={styles.index}>
            <Link href={'/case-studies'}>
                <div className={styles.nav}>
                    close
                    <img src="https://fritani.my.canva.site/uiux-portfolio/videos/435164c1555a336ba7a82f786005d2d6.gif" alt="" />

                </div>
            </Link>
            
            <div  className={styles.header_container}>
                <div className={styles.container_1}>
                    <h3>{caseStudy.title} -</h3>
                    <h3>{caseStudy.description}</h3>
                    <p>{caseStudy.content}</p>
                </div>
                <div className={styles.image_container}>
                    <img alt='' src={caseStudy.imageUrl} loading='lazy' width='100%' height='100%'/>
                </div>
            </div>
            
            <div className={styles.container_roles}>
                <FancyHeaderYellow title="My roles"/>
                <div className={styles.roles}>
                    {caseStudy.roles.map((role, index) => {
                        return(
                            <div key={role} className={styles.role} style={{
                                background: colors[index]? colors[index].background : colors[0].background ,
                                color: colors[index]? colors[index].color : colors[0].color ,
                            }}>
                                {role}
                            </div>
                        )
                    })}
                </div>
                

                
            </div>

            <div className={styles.container_results}>
                <FancyHeaderYellow title="Expected results"/>
                <div className={styles.results}>
                    {caseStudy.results.map((result, index)=> {
                       return (
                            <Result key={index} 
                                index={index}
                                content={result}
                            />
                        )
                    })}
                </div>
            </div>
            



            

            
            
        </div>
    )
}

export default CaseStudy;