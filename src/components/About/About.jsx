import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import styles from "./About.module.css";
const About = () => {
    const aboutList = 
    [
        {
            id:1,
            icon:"/assets/About/arrow.png",
            title:"Frontend Developer",
            description:"I'm a frontend Developer with Experience in building responsive and optimised sites",
        },
        {
            id:2,
            icon:"/assets/About/backend.png",
            title:"Backend Developer",
            description:"I have experience creating fast and optimised back-end systems and APIs",
        },
        {
            id:3,
            icon:"/assets/About/UIdesign.png",
            title:"UI Designer",
            description:"I have designed mutilple landing pages and have created design systems as well",
        },
    ];
  return (
    <section className='mt-5' id='about'>
        <Container 
        className={styles.aboutSection}
        fluid="md">
            <h2
            style={{
                fontWeight:700,
                fontSize:"35px"
            }}>ABOUT</h2>
            <Row>
                <Col md={5} className={styles.girlImage}>
                <img 
                src="/assets/About/bb6fc49f7303f3ffb733c16acae12bb1.png" 
                alt="GirlImage" />
                </Col>
                <Col md={7} className='mt-5'>
                <ul>
                    {aboutList.map((item)=>{
                        return (
                        <li key={item.id} className={styles.listItem}>
                            <img src={item.icon} width={50} height={50} className={styles.icon}></img>
                            <div>
                                <h3 style={{fontWeight:800,fontSize:"25px"}}>{item.title}</h3>
                                <p style={{fontWeight:400,fontSize:"25px"}}>{item.description}</p>
                            </div>
                        </li>
                        )
                    })}
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About