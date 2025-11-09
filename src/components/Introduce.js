import React from 'react'
import { Container } from 'react-bootstrap'
import '../styles/introduce.css';
import phone_screen from '../Assets/phone_screens_c32895c20c.webp'


export const Introduce = () => {
  return (
    <div>  <section className="hart-section">
      {/* Left: Image */}
      <div className="hart-left">
        <img
          src={phone_screen}
          alt="FITTR HART App"
          className="hart-phone"
        />
      </div>

      {/* Right: Text */}
      <div className="hart-right">
        <h1 className="hart-title">
          Introducing <span className="highlight">FLEXIFY</span>
        </h1>
        <h2 className="hart-subtitle">The HRV And Recovery Tracker</h2>
        <p className="hart-description">
          Discover the groundbreaking technology that helps you optimise your
          sleep, improve your recovery, and unlock the secrets to longevity.
        </p>
        <button className="hart-btn">Learn more</button>
      </div>
    </section>
    </div>
  )
}
export default Introduce