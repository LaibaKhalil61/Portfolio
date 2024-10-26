import React from 'react'
import {Container,Col,Row,Button} from "react-bootstrap";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <header>
        <Container fluid="md" className='mt-5' >
            <Row className={styles.heroSection}>
                <Col xs={12} md={6} className={styles.HeroSectionDetails}>
                <h1 
                className={styles.name}>
                    Hi, I'm Laiba Khalil
                </h1>
                <p 
                className={styles.description}
                > 
                A Front-End Developer located in Lahore.
                    Reach out if you'd like to know more
                </p>
                <Button className='mb-3 rounded-5'style={{fontWeight:600
                    ,fontSize:"31px",
                    backgroundColor:"#576CBC",
                    width:"50%"}}>
                    Contact Me
                </Button>
                </Col>
                <Col xs={12} md={6} className={styles.HeroSectionImage}>
                <img src="/assets/hero/1f6af27cc37b1caa33eeff32059d8d96.png" alt="" srcset="" />
                </Col>
            </Row>
            {/* Two circles in the bcakground */}
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </Container>
    </header>
  )
}

export default HeroSection