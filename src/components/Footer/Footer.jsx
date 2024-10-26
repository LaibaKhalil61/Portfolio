import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div id="contact" className={styles.footer}>
        <Container>
            <Row>
                <Col md={6} className='pt-3'>
                <h2 className={styles.head}>Contact</h2>
                <p className={styles.description}>Feel free to reach out!</p>
                </Col>
                <Col md={6} className='text-center'>
                    <ul>
                        <li className='d-flex flex-row'>
                            <img src="/assets/Footer/mail.png" alt="Mail Icon" width={50} height={50}/>
                            <p className={styles.listItem}>myemail@mail.com</p>
                        </li>
                        <li className='d-flex flex-row'>
                            <img src="/assets/Footer/linkedIn.png" alt="LinkedIn Icon" width={50} height={50}/>
                            <p className={styles.listItem}>linkedin.com/myname</p>
                        </li>
                        <li className='d-flex flex-row'>
                            <img src="/assets/Footer/github.png" alt="Github Icon" width={50} height={50}/>
                            <p className={styles.listItem}>github.com/myname</p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer