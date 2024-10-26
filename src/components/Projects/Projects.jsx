import React from 'react'
import {Container,Row,Card,Col} from "react-bootstrap"; 
import styles from "./Projects.module.css";
const Projects = () => {
    const ProjectList = [
        {
            id:1,
            image:"/assets/Projects/8c0200ebca5fee1e2d4f1ed103f86b82.png",
            name:"Project A",
            description:"I made this project to learn the latest technologies",
            demo:"",
            code:"",
            techstack:["React","Mongodb"]
        },
        {
            id:2,
            image:"/assets/Projects/8c0200ebca5fee1e2d4f1ed103f86b82.png",
            name:"Project B",
            description:"I made this project to learn the latest technologies",
            demo:"",
            code:"",
            techstack:["React","Mongodb"]
        },
        {
            id:3,
            image:"/assets/Projects/8c0200ebca5fee1e2d4f1ed103f86b82.png",
            name:"Project C",
            description:"I made this project to learn the latest technologies",
            demo:"",
            code:"",
            techstack:["React","Mongodb"]
        }
    ];
  return (
    <section id='projects'>
        <Container fluid="md" className={styles.projectSection}>
            <h2 className={styles.headSection}>
                Projects
            </h2>
            <Row className='d-flex flex-row'>
                {ProjectList.map((project)=>{
                    return (
                        <Col md={6} lg={4}>
                        <Card className={styles.card}>
                            <Card.Img variant="top" src={project.image} className={styles.cardImg}/>
                            <Card.Body>
                                <Card.Title className={styles.cardTitle}>{project.name}</Card.Title>
                                <Card.Text className={styles.cardText}>
                                {project.description}
                                </Card.Text>
                                <div className={styles.techStack}>
                                {project.techstack.map((tech)=>{
                                    return (
                                        <div className={styles.techItem}>{tech}</div>
                                    )
                                })}
                                </div>
                                <div className={styles.container}>
                                <a className={styles.demo} href={project.demo}>Demo</a>
                                <a className={styles.code} href={project.code}>Source Code</a>
                                </div>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </section>
  )
}

export default Projects