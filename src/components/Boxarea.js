import React, { useEffect, useRef, useState } from 'react'
// import 'boxarea.css' from '../'
import '../styles/boxarea.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import wallpaper from '../Assets/wallpaper.png'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import AOS from "aos";
import "aos/dist/aos.css";


export const Boxarea = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (ms)
      offset: 100,    // Offset (px) from the original trigger point
    //   once: true,     // Whether animation should happen only once
    });
  }, []);
  return (
    <div className='boxarea'>
            <h1>FEATURES</h1>
            <Container className='box1'>
            <Row>
                {/* <Col></Col> */}
                <Col md={8}  >
                <div className='box2' data-aos="fade-right">
                    <Row>
                        <Col><Image src={image2}  width='100%' height={400}  /></Col>
                        <Col>
                        <h3>Tailored Plans</h3>
                            <p>At FLEXIFY, we understand your goals and current lifestyle before creating a plan that works for YOU! Just as your friend’s clothes aren’t the best fit for you, their nutrition and training plans won’t work for you either. Our plans are made for your individual needs.</p>
                            <p>At FLEXIFY, we understand your goals and current lifestyle before creating a plan that works for YOU! Just as your friend’s clothes aren’t the best fit for you, their nutrition and training plans won’t work for you either. Our plans are made for your individual needs.</p>
                        </Col>
                    </Row>
                 </div>
                </Col>
                <Col></Col>
                {/* <Col md={10} className='box2'>
                 <div>
                    <Row>
                        <Col><Image src={wallpaper}  width='100%' height={300} thumbnail  /></Col>
                        <Col>
                            <h3>Tailored Plans</h3>
                            <p>At FLEXIFY, we understand your goals and current lifestyle before creating a plan that works for YOU! Just as your friend’s clothes aren’t the best fit for you, their nutrition and training plans won’t work for you either. Our plans are made for your individual needs.</p>
                        </Col>
                    </Row>
                 </div>
                 
                </Col> */}
                <Col></Col>
            </Row>
            {/* <br/> */}
            <Row>
                <Col></Col>
                <Col md={8}>
                <div className='box2'  data-aos="fade-left">
                    <Row>
                        <Col><Image src={image1}  width='100%' height={400} /></Col>
                        <Col>
                        <h3>Building Sustainable Habits</h3>
                        <p>Getting fit is the easy part, staying fit is the real deal. We at FLEXIFY realise this and integrate fitness into your existing lifestyle gradually to ensure you don’t lose the results.</p>
                        <p>Getting fit is the easy part, staying fit is the real deal. We at FLEXIFY realise this and integrate fitness into your existing lifestyle gradually to ensure you don’t lose the results.</p>
                        </Col>
                    </Row>
                 </div>
                </Col>
              
            </Row>
            <Row>
                <Col md={8}>
                <div className='box2'  data-aos="fade-right">
                    <Row>
                        <Col><Image src={image2}  width='100%' height={400}  /></Col>
                        <Col>
                        <h3>Monitoring and Accountability</h3>
                        <p>Our expert coaches don’t just give you diet and training plans -they stay by your side as a guide and help you navigate your fitness journey.</p>
                        <p>Our expert coaches don’t just give you diet and training plans -they stay by your side as a guide and help you navigate your fitness journey.</p>
                        </Col>
                    </Row>
                 </div>
                </Col>
                <Col></Col>
                
            </Row> 
            </Container>
    </div>
  )
}
export default Boxarea