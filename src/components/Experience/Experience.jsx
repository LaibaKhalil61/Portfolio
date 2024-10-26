import React from 'react'
import styles from "./Experience.module.css"
import {Container,Col,Row} from "react-bootstrap"
const Experience = () => {
    const techList = 
    [
        {
            id:1,
            img:"/assets/experience/html.png",
            name:"HTML"
        },
        {
            id:2,
            img:"/assets/experience/CSS.png",
            name:"CSS"
        },
        {
            id:3,
            img:"/assets/experience/React.png",
            name:"React"
        },
        {
            id:4,
            img:"/assets/experience/Js.png",
            name:"NodeJs"
        },
        {
            id:5,
            img:"/assets/experience/graphQL.png",
            name:"GraphQL"
        },
        {
            id:6,
            img:"/assets/experience/MongoDB.png",
            name:"MongoDB"
        },
        {
            id:7,
            img:"/assets/experience/figma.png",
            name:"Figma"
        },
    ];
    const companyList = 
    [
        {
            id:1,
            img:"/assets/experience/Google.png",
            jobTitle:"Software Engineer, Google",
            duration:"Sept,2022 - Present",
            taskList : ["Worked on google Maps","Reduced load times by 50%"]
        },
        {
            id:2,
            img:"/assets/experience/Microsoft.png",
            jobTitle:"UI Designer, Microsoft",
            duration:"Aug,2021 - Aug,2022",
            taskList : ["Worked on Windows 11","Designed the control Panel"]
        },
        {
            id:3,
            img:"/assets/experience/Netflix.png",
            jobTitle:"SWE Intern, Netflix",
            duration:"April,2020 - JUne,2020",
            taskList : ["Worked on component Library","Helped to design UI components"]
        },
    ];
  return (
    <section id='experience' className={styles.experienceSection}>
        <Container>
            <h2 className={styles.headSection}>Experience</h2>
            <Row>
                {/* TechStack */}
                <Col md={6} className='d-flex'>
                <Row className='row row-cols-2 row-cols-lg-3'>
                {techList.map((techItem)=>{
                    return (
                        <div key={techItem.id} className={styles.tech}>
                        <div className={styles.techContainer}>
                            <img src={techItem.img} alt="tech Icon" width={75} height={75}/>
                        </div>
                        <h3>{techItem.name}</h3>
                        </div>
                    )
                })}
                </Row>
                </Col>
                <Col md={6} >
                <ul className={styles.companyList}>
                    {
                        companyList.map((company)=>{
                            return(
                                <div className='d-flex mb-5 gap-4'>
                                    <img className={styles.companyLogo} src={company.img} alt="Company Logo" width={50} height={50}/>
                                    <div>
                                        <h2 className={styles.jobTitle}>{company.jobTitle}</h2>
                                        <p className={styles.jobDuration}>{company.duration}</p>
                                        <ul className={styles.tasklist}>
                                            {
                                            company.taskList.map((task)=>{
                                                return (
                                                    <li>{task}</li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
                </Col>
            </Row>
        </Container>
        </section>
  )
}

export default Experience