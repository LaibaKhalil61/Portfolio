import React from 'react'
import styles from "./Navbar.module.css";
import { useState } from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";
import {Container,Row,Col} from "react-bootstrap";
import { useEffect } from 'react';
const Navbar = () => {
  const [isMenuVisible,setIsMenuVisible] = useState(false);
  const menuList = [
    {
      id :1,
      name:"About",
      link:"/#about",
    }
    ,{
      id :2,
      name:"Experience",
      link:"/#experience",
    },{
      id :3,
      name:"Projects",
      link:"/#projects",
    },
    {
      id :4,
      name:"Contact",
      link:"/#contact",
    },
  ]
  const showNavbar= ()=>{
    setIsMenuVisible(!isMenuVisible);
  }
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  
  useEffect(()=>{
    setIsMenuVisible(false);
  },[isSmallDevice])

  return (
    <nav> 
      <Container fluid="md">
        <Row className={styles.nav}>
          <Col md={4} >
            <h2>PortFolio</h2>
          </Col>
        {/* Mobile Menu */}
        {
          isSmallDevice ? (isMenuVisible && <Col md={8}>
            <div className={styles.mobileMenu}>
              {menuList.map((section)=>{
                return (
                <div 
                  key={section.id} 
                  className={styles.menuList}
                  onClick={(e)=>{
                    e.preventDefault();
                    window.location.replace(section.link)
                  }}
                >
                  {section.name}
                </div>
                )
              })}
            </div>
            </Col> ):
                (<Col md={8}>
                  <div className={styles.desktopMenu}>
                    {menuList.map((section)=>{
                      return (
                      <div 
                        key={section.id} 
                        className={styles.menuList}
                        onClick={(e)=>{
                          e.preventDefault();
                          window.location.replace(section.link)
                        }}
                      >
                        {section.name}
                      </div>
                      )
                    })}
                  </div>
                  </Col>)
        }        
        <Col>
        {/* Menu Button */}
        <img 
        src="/assets/navbar/6ead33d7e403da8d32c55c73fbe8d8eb.png" 
        alt="navbar Icon" 
        width={40} 
        height={40}
        onClick={showNavbar}
        className={styles.menuBtn}
      />
      </Col>
</Row>
</Container>
    </nav>
  )
}
export default Navbar;