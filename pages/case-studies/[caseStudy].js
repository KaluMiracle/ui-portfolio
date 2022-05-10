/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { caseStudies } from "../../layouts/casestudies"
import styles from './slug.module.scss'
import Link from 'next/link'

export const getStaticPaths = ()=> {
    // const paths = caseStudies.map((item) => {
    //     return {

    //         params: {caseStudy: 'item.title'}
    //     }
    // })

    const paths = [{params: {caseStudy: caseStudies[0].title}}]
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = (context)=>{
   
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

const FancyHeader= ({
    title=''
})=>{
    return(
        <div className={styles.fancy_header}>
            <div className={styles.grey}>
                <h1>{title}</h1>
            </div>
            <h3>{title}</h3>

        </div>
    )
}

const colors = [
    {
        background: '#e84839',
        color: 'white',
    },
    {
        background: '#fcc018',
        color: 'black',
    },
    {
        background: '#00c2cb',
        color: 'black',
    },
    {
        background: '#428ecc',
        color: 'white',
    },
    
]
const CaseStudy = ({caseStudy={
   index: 0,
    title: 'shoppie',
    description: 'ecommerce App',
    content: 'Shoppie is an ecommerce app that provides a personalised shopping experience to diversified shoppers',
    imageUrl: 'https://fritani.my.canva.site/uiux-design-portfolio-website-castudies/images/c62e4107025c473d78d432447db4a287.png',

    roles: ['design thinking', 'wireframing', 'designing', 'prototyping'],
    results: ['Creating the ideal product that is both desirable and viable when tested by users',
                'Giving users a more seamless and personalised shopping experience'
            ],

    brainstorming: [
        
    ],

    others: [
            
    ],
        

        
}}) =>{
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

            <div className={styles.brain_storming}>
                <FancyHeader title="Brain storming"/>
                    {
                        caseStudy.brainstorming.map((item, index)=> {
                            return (
                            <div className={styles.description} key={index}>
                                <p><span>{index + 1}. {item.title}: </span>{item.description}</p>

                                {item.content ?
                                    <div className={styles.contents_container} >
                                        {item.content.map((content, index)=>{
                                            return (
                                                <div key={index} className={styles.content}>
                                                    <article>
                                                        <h5>The Challenge</h5>
                                                        <div className={styles.box} style={{
                                                            background: colors[index]? colors[index].background : colors[0].background ,

                                                        }}>
                                                            {content.challenge}
                                                        </div>
                                                    </article>
                                                    
                                                    <article>
                                                        <h5>The solution</h5>
                                                        <div className={styles.box} style={{
                                                            background: colors[index]? colors[index].background : colors[0].background ,

                                                        }}> 
                                                            {content.solution}
                                                        </div>
                                                    </article>
                                                </div>
                                            )
                                            
                                        })}
                                    </div>  : null
                                }

                            </div>)
                        })
                    }

                
                
            </div>
            

            {
                caseStudy.others.map((item, index) => {
                    return (
                        <div className={styles.container_large} key={index}>
                            <FancyHeader title={item.title}/>
                            <div className={styles.content}>
                                <p>{item.description}</p>
                            </div>
                            {
                                item.urls.map((url, index) => {
                                    return(
                                        <div key={index} className={styles.image_container}>
                                            {
                                                url.type === 'image' ? 
                                                    <img alt='' src={url.url} loading='lazy' width='100%' height='100%'/>
                                                :

                                                    <video controls={true} autoPlay="" name="media" width={'100%'} height= '100%'>
                                                        <source src={url.url} type="video/mp4"/>

                                                    </video>
                                            }
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    )
                })
            }
            


            

            
            
        </div>
    )
}

export default CaseStudy;

//  <img alt='' src={url} loading='lazy' width='100%' height='100%'/>

