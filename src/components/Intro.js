import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import leftImg from "../Assets/phone_screens_c32895c20c.webp";
import "../styles/Intro.css";

export const Intro = () => {
  return (
    <section className="intro-section">
      {/* Left Content */}
      <div className="intro-images">
        <img src={leftImg} alt="Left" className="intro-img intro-left" />
      </div>
      <div className="intro-text">
        <h2 className="intro-title">
            Introducing the <br/> FLEXIFY app
        </h2>
        <p className="intro-subtitle">
          Coaches, Community, Customised Plans. Plus loads of free tools <br/>like Calorie Counter, Diet Tool, Step Counter, Water Reminder,<br/> Exercise Library, Articles, and much more!
        </p>
        <button className="intro-btn">Get the app</button>
        {/* <p className="subtitle2">DOWNLOAD THE FLEXIFY APP</p> */}
      </div>

      {/* Right Images */}
      
    </section>
  )
}

export default Intro